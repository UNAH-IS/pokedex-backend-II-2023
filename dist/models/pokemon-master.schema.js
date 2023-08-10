"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonMastersSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    firstName: String,
    lastName: String,
    gender: String,
    pokemons: (Array),
    level: String
});
exports.PokemonMastersSchema = mongoose_1.default.model('pokemonmasters', schema);
