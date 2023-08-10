"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pokemones_controller_1 = require("../controllers/pokemones.controller");
let router = express_1.default.Router(); //Crea un objeto similar a app
router.get('/', pokemones_controller_1.obtenerPokemones);
router.get('/:id', pokemones_controller_1.obtenerPokemon);
router.post('/', pokemones_controller_1.guardarPokemon);
router.put('/:id', pokemones_controller_1.actualizarPokemon);
router.delete('/:id', pokemones_controller_1.eliminarPokemon);
exports.default = router; //Donde lo quiera importar puedo asignarle cualquier nombre
//Solo puede haber un export default por archivo
