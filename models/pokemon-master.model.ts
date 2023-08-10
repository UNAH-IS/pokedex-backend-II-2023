import { BasePokemon, Gender } from "./pokemon.model";

export interface PokemonMaster {
    firstName: string;
    lastName: string;
    gender: Gender;
    pokemons: Array<BasePokemon>;
    level: string;
}