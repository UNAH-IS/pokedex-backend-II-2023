import mongoose  from "mongoose";
export type Gender = "Masculino" | "Femenino";

export interface BasePokemon {
  num: string;
  name: string;
}

export interface Pokemon extends BasePokemon {
  _id?: mongoose.Types.ObjectId,
  id: number;
  gender?: Gender;
  img: string;
  type: Array<string>; //string[]
  height: string;
  weight: string;
  candy: string;
  candy_count?: number;
  egg: string;
  spawn_chance: number;
  avg_spawns: number;
  spawn_time: string;
  multipliers: Array<number> | null;
  weaknesses: Array<string>;
  next_evolution?: Array<BasePokemon>;
  prev_evolution?: Array<BasePokemon>;
};

