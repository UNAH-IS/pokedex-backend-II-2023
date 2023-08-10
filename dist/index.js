"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const pokemones_router_1 = __importDefault(require("./routers/pokemones.router"));
const pokemonmasters_router_1 = __importDefault(require("./routers/pokemonmasters.router"));
const database_1 = require("./utils/database");
dotenv_1.default.config();
const db = new database_1.Database(); //SE conecta
const app = (0, express_1.default)();
const port = process.env.PORT; //3000
app.use(express_1.default.json()); //Poblar el objeto body
app.use('/pokemones', pokemones_router_1.default);
app.use('/pokemonmasters', pokemonmasters_router_1.default);
// Rutas, Endpoints, Servicios web, operaciones del crud
// Método http: get, post, put, delete ==> CreateReadUpdateDelete
// URL: localhost:3000/
app.get('/', (peticion, respuesta) => {
    respuesta.send('Backend pokedex');
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
