const { Router } = require('express');
const userController = require('./controllers/userController');

const routes = Router();

routes.get('/', (req, res) => {
    res.send('The Apllication is running!');
});

routes.get('/find/:name', userController.find);

module.exports = routes;