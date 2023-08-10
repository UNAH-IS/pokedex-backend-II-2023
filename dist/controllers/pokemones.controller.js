"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarPokemon = exports.actualizarPokemon = exports.guardarPokemon = exports.obtenerPokemon = exports.obtenerPokemones = void 0;
const pokemon_schema_1 = require("../models/pokemon.schema");
const obtenerPokemones = (peticion, respuesta) => {
    pokemon_schema_1.PokemonSchema.find()
        .then((result) => {
        respuesta.send(result);
        respuesta.end();
    })
        .catch((error) => console.error(error));
};
exports.obtenerPokemones = obtenerPokemones;
const obtenerPokemon = (peticion, respuesta) => {
    pokemon_schema_1.PokemonSchema.findOne({ _id: peticion.params.id })
        .then((result) => {
        respuesta.send(result);
        respuesta.end();
    })
        .catch((error) => console.error(error));
};
exports.obtenerPokemon = obtenerPokemon;
const guardarPokemon = (req, res) => {
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
    const p = new pokemon_schema_1.PokemonSchema(req.body);
    p.save().then((saveResponse) => {
        res.send(saveResponse);
        res.end();
    }).catch((error) => {
        console.log('ERRRORRR: ', error);
        res.send({ message: 'Hubo un error al guardar', error }); // shorthand
        res.end();
    });
};
exports.guardarPokemon = guardarPokemon;
const actualizarPokemon = (req, res) => {
    pokemon_schema_1.PokemonSchema.updateOne({ _id: req.params.id }, req.body
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
    ).then((updateResponse) => {
        res.send({ message: 'Registro actualizado', updateResponse });
        res.end();
    }).catch((error) => {
        res.send({ message: 'Hubo un error al actualizar', error }); // shorthand
        res.end();
    });
};
exports.actualizarPokemon = actualizarPokemon;
const eliminarPokemon = (req, res) => {
    pokemon_schema_1.PokemonSchema.deleteOne({ _id: req.params.id })
        .then((removeResult) => {
        res.send({ message: 'Registro eliminado', removeResult });
        res.end();
    });
};
exports.eliminarPokemon = eliminarPokemon;
