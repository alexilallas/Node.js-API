const { PORT, DATABASE } = require('../env');
const http = require('http');
const routes = require('./routes');
const express = require('express');
const mongoose = require('mongoose');

//Creating the server
const app = express();
const server = http.Server(app);

//Database connection
mongoose.connect('mongodb://localhost/' + DATABASE, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => { console.log('Connected on database: ' + DATABASE) });

//Using end-points
app.use(routes);

server.listen(PORT, () => { console.log('Server is running on port ' + PORT) });