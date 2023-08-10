import { Request, Response } from "express";
import { PokemonMastersSchema } from "../models/pokemon-master.schema";
import mongoose, {ObjectId}  from "mongoose";

export const getPokemonMasters = (req: Request, res: Response) => {
  PokemonMastersSchema.find({}, {firstName: true, lastName: true, img: true, level: true})
		.then((result) => {
			res.send({message: 'Maestros pokemon',result});
			res.end();
		})
		.catch((error) => {
      res.send(error);
			res.end();
    });
}

//Obtener un maestro pokemon, con todo
export const getPokemonMaster = (req: Request, res: Response) => {
  PokemonMastersSchema.findById(req.params.id)
		.then((result) => {
			res.send(result);
			res.end();
		})
		.catch((error) => {
      res.send(error);
			res.end();
    });
}


//Obtener detalle de los pokemones de un maestro pokemon
// Set up routes
export const detallePokemonesMaestroPokemon = async (req: Request, res: Response) => {
  try {
    const pokemonMasterId = req.params.id;
    const result = await PokemonMastersSchema.aggregate([
      {
        $lookup: {
          from: 'pokemones',
          localField: 'pokemons._id',
          foreignField: '_id',
          as: 'detallesPokemones',
        },
      },
      {
        $match: {
          _id: new mongoose.Types.ObjectId(pokemonMasterId),
        },
      },
      {
        $project: {
          detallesPokemones: true,
          _id: false,
        },
      },
    ]).exec();

    // res.json(result);
    res.send(result);
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
}

// Agregar pokemon a un maestro pokemon
export const addPokemonToMaster = (req: Request, res: Response) => {
  PokemonMastersSchema.updateOne({_id: req.params.id},
    {
      $push: { 
          pokemons: {
            _id: new mongoose.Types.ObjectId(req.body.id),
            name: req.body.name,
            img: req.body.img
          } 
      }
    }
  ).then(result => {
    res.send({message: 'Pokemon agregado', result});
    res.end();
  }).catch(error => {
    res.send({message: 'Ocurrio un error', error});
    res.end();
  })
};