const express = require('express');

const app = express();

const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Server http on ${PORT}`)
})

server.on('error', err => console.log('Error on server', err))

app.get('/', (req, res) => {
    res.send({msn: 'Hola Esteban Montero'})  
})

app.get('/products', (req, res) => {
    res.send([
            {name: 'beers',price: 120},
            {name: 'wine',price: 200}
        ])  
})