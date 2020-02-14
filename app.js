const env = require ('./env.js');

const app = require('express')();

const server = app.get('/', (req, res) => {
    res.status(302).json({nome:'Alexi'})
})


server.listen(env.port, ()=>{console.log('Servidor online na porta ' + env.port)});