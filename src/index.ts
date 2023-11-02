import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('¡Hola Mundo!!');
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto http://localhost:${port}`);
});