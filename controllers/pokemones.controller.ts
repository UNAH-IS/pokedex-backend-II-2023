//Funciones específicas con la lógica de negocio
import { Request, Response } from 'express';
import { pokemones } from '../data/pokemones';
import { Pokemon } from '../models/pokemon.model';
import { PokemonSchema } from '../models/pokemon.schema';

export const obtenerPokemones = (peticion: Request, respuesta: Response) => {
  PokemonSchema.find()
		.then((result:Array<Pokemon>) => {
			respuesta.send(result);
			respuesta.end();
		})
		.catch((error:any) => console.error(error));
}

export const obtenerPokemon = (peticion: Request, respuesta: Response) => {
  PokemonSchema.findOne({_id: peticion.params.id})
		.then((result:Pokemon | null) => {
			respuesta.send(result);
			respuesta.end();
		})
		.catch((error:any) => console.error(error));
}

export const guardarPokemon = (req: Request, res: Response) => {
  // const p = new PokemonSchema({
	// 	id: req.body.id,
	// 	gender: req.body.gender,
	// 	num: req.body.num,
	// 	name: req.body.name,
	// 	img: req.body.img,
	// 	type: req.body.type,
	// 	height: req.body.height, 
	// 	weight: req.body.weight, 
	// 	candy: req.body.candy, 
	// 	candy_count: req.body.candy_count, 
	// 	egg: req.body.egg, 
	// 	spawn_chance: req.body.spawn, 
	// 	avg_spawns: req.body.avg_spawns, 
	// 	spawn_time: req.body.spawn_time, 
	// 	multipliers: req.body.multipliers, 
	// 	weaknesses: req.body.weaknesses, 
	// 	next_evolution: req.body.next_evolution,
	// });
  const p = new PokemonSchema(req.body);
  p.save().then((saveResponse:any) => {
    res.send(saveResponse);
    res.end();
  }).catch((error:any) => {
    console.log('ERRRORRR: ', error);
    res.send({message: 'Hubo un error al guardar', error}); // shorthand
    res.end();
  });
}

export const actualizarPokemon = (req: Request, res: Response) => {
  PokemonSchema.updateOne({_id: req.params.id}, req.body
  //   {
	// 	id: req.body.id,
	// 	gender: req.body.gender,
	// 	num: req.body.num,
	// 	name: req.body.name,
	// 	img: req.body.img,
	// 	type: req.body.type,
	// 	height: req.body.height, 
	// 	weight: req.body.weight, 
	// 	candy: req.body.candy, 
	// 	candy_count: req.body.candy_count, 
	// 	egg: req.body.egg, 
	// 	spawn_chance: req.body.spawn, 
	// 	avg_spawns: req.body.avg_spawns, 
	// 	spawn_time: req.body.spawn_time, 
	// 	multipliers: req.body.multipliers, 
	// 	weaknesses: req.body.weaknesses, 
	// 	next_evolution: req.body.next_evolution,
	// }

  ).then((updateResponse:any) => {
    res.send({message: 'Registro actualizado', updateResponse});
    res.end();
  }).catch((error:any) =>{
    res.send({message: 'Hubo un error al actualizar', error}); // shorthand
    res.end();
  });
}

export const eliminarPokemon = (req: Request, res: Response) => {
  PokemonSchema.deleteOne({_id: req.params.id})
	.then((removeResult:any) => {
		res.send({message: 'Registro eliminado', removeResult});
		res.end();
	});
}