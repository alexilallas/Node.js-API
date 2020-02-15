const env = require ('../env');
const http = require ('http');
const routes = require ('./routes');
const express = require ('express');

const app = express();
const server = http.Server(app);

app.use(routes);


server.listen(env.port, ()=>{console.log('Servidor online na porta ' + env.port)});