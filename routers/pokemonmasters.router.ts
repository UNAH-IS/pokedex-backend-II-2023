import express from "express";
import { addPokemonToMaster, getPokemonMasters, getPokemonMaster, detallePokemonesMaestroPokemon } from "../controllers/pokemon-masters.controller";

const router = express.Router();

router.get("/", getPokemonMasters);
router.get("/:id", getPokemonMaster);
router.get("/:id/detalle", detallePokemonesMaestroPokemon);
router.put("/:id/pokemons", addPokemonToMaster);

export default router;