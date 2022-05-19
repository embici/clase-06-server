const http = require('http');

const server = http.createServer((req, res) => {
    const date = new Date();
    res.end('La hora es: '+ date.toLocaleTimeString());
});

const connectedServer = server.listen(8080, () => {
    console.log(`Server http listening on ${connectedServer.address().port}...`);
})