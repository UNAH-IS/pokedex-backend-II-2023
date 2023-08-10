import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import routerPokemones from './routers/pokemones.router';
import routerPokemonMasters from './routers/pokemonmasters.router';
import { Database } from './utils/database';

dotenv.config();
const db:Database = new Database(); //SE conecta
const app: Express = express();
const port: string | undefined = process.env.PORT; //3000

app.use(express.json()); //Poblar el objeto body
app.use('/pokemones', routerPokemones);
app.use('/pokemonmasters', routerPokemonMasters);

// Rutas, Endpoints, Servicios web, operaciones del crud
// Método http: get, post, put, delete ==> CreateReadUpdateDelete
// URL: localhost:3000/
app.get('/', (peticion: Request, respuesta: Response) => {
  respuesta.send('Backend pokedex');
});


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});