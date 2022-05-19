const express = require('express');

const app = express();

const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Server http on ${PORT}`)
})

server.on('error', err => console.log('Error on server', err))

app.get('/', (req, res) => {
    res.send('<h1 style="color:blue">Bienvenidos al servidor express!</h1>')  
})

let visitas = 0;

app.get('/visitas', (req, res) => {
    res.send(`<p>Visitas: ${++visitas}</p>`)  
})

app.get('/fyh', (req, res) => {
    const date = new Date().toLocaleString();
    res.send({fyh: date});
})