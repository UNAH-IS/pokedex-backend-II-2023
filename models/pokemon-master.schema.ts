import mongoose  from "mongoose";
import { PokemonMaster } from "./pokemon-master.model";
import { BasePokemon } from "./pokemon.model";

const schema = new mongoose.Schema<PokemonMaster>({
  firstName: String,
  lastName: String,
  gender: String,
  pokemons: Array<BasePokemon>,
  level: String
});

export const PokemonMastersSchema = mongoose.model('pokemonmasters',schema);
