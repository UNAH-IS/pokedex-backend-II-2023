"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPokemonToMaster = exports.detallePokemonesMaestroPokemon = exports.getPokemonMaster = exports.getPokemonMasters = void 0;
const pokemon_master_schema_1 = require("../models/pokemon-master.schema");
const mongoose_1 = __importDefault(require("mongoose"));
const getPokemonMasters = (req, res) => {
    pokemon_master_schema_1.PokemonMastersSchema.find({}, { firstName: true, lastName: true, img: true, level: true })
        .then((result) => {
        res.send({ message: 'Maestros pokemon', result });
        res.end();
    })
        .catch((error) => {
        res.send(error);
        res.end();
    });
};
exports.getPokemonMasters = getPokemonMasters;
//Obtener un maestro pokemon, con todo
const getPokemonMaster = (req, res) => {
    pokemon_master_schema_1.PokemonMastersSchema.findById(req.params.id)
        .then((result) => {
        res.send(result);
        res.end();
    })
        .catch((error) => {
        res.send(error);
        res.end();
    });
};
exports.getPokemonMaster = getPokemonMaster;
//Obtener detalle de los pokemones de un maestro pokemon
// Set up routes
const detallePokemonesMaestroPokemon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pokemonMasterId = req.params.id;
        const result = yield pokemon_master_schema_1.PokemonMastersSchema.aggregate([
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
                    _id: new mongoose_1.default.Types.ObjectId(pokemonMasterId),
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
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});
exports.detallePokemonesMaestroPokemon = detallePokemonesMaestroPokemon;
// Agregar pokemon a un maestro pokemon
const addPokemonToMaster = (req, res) => {
    pokemon_master_schema_1.PokemonMastersSchema.updateOne({ _id: req.params.id }, {
        $push: {
            pokemons: {
                _id: new mongoose_1.default.Types.ObjectId(req.body.id),
                name: req.body.name,
                img: req.body.img
            }
        }
    }).then(result => {
        res.send({ message: 'Pokemon agregado', result });
        res.end();
    }).catch(error => {
        res.send({ message: 'Ocurrio un error', error });
        res.end();
    });
};
exports.addPokemonToMaster = addPokemonToMaster;
