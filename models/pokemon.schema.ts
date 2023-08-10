// Para definir reglas de los objetos que se pueden almacenar en mongo

import mongoose  from "mongoose";
import { Pokemon, Gender, BasePokemon } from "./pokemon.model";

const schema = new mongoose.Schema<Pokemon>({
  // _id: {
  //   type: mongoose.Types.ObjectId,
  //   required: false,
  // },
  id:             Number,
  gender: {
    type: String,
    required: true
  },
  num:            String,
  name:           String,
  img:            String,
  type:           Array<String>,
  height:         String,
  weight:         String,
  candy:          String,
  candy_count:    Number,
  egg:            String,
  spawn_chance:   Number,
  avg_spawns:     Number,
  spawn_time:     String,
  multipliers:    Array<Number>,
  weaknesses:     Array<String>,
  prev_evolution: Array<BasePokemon>,
  next_evolution: Array<BasePokemon>,
});

export const PokemonSchema = mongoose.model('pokemones',schema);// enlace
