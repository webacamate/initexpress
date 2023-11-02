import express from 'express';
import * as process from 'process';
import * as dotenv from 'dotenv';
import { customConsoleReqs, myConsole, myConsoleError } from 'backend_utils_express';
import { getIndex } from './functionRoutes';
// import { getIndex } from './functionRoutes';

dotenv.config();
const port = process.env.PORT ?? 3000;

const app = express();
app.use(express.json());
app.use(customConsoleReqs);


console.log = myConsole
console.error = myConsoleError


app.get('/', getIndex);


app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto http://localhost:${port}`);
});