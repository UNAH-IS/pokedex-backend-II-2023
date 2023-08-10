"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pokemon_masters_controller_1 = require("../controllers/pokemon-masters.controller");
const router = express_1.default.Router();
router.get("/", pokemon_masters_controller_1.getPokemonMasters);
router.get("/:id", pokemon_masters_controller_1.getPokemonMaster);
router.get("/:id/detalle", pokemon_masters_controller_1.detallePokemonesMaestroPokemon);
router.put("/:id/pokemons", pokemon_masters_controller_1.addPokemonToMaster);
exports.default = router;
