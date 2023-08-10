import express from 'express';
import { obtenerPokemones, obtenerPokemon, guardarPokemon, actualizarPokemon, eliminarPokemon } from '../controllers/pokemones.controller';

let router = express.Router(); //Crea un objeto similar a app

router.get('/', obtenerPokemones);
router.get('/:id', obtenerPokemon);
router.post('/', guardarPokemon);
router.put('/:id', actualizarPokemon);
router.delete('/:id', eliminarPokemon);

export default router; //Donde lo quiera importar puedo asignarle cualquier nombre
//Solo puede haber un export default por archivo