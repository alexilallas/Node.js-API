const { Router } = require('express');
const userController = require('./controllers/userController');

const routes = Router();

routes.get('/', (req, res) => {
    res.send('The Apllication is running!');
});

// User routes
routes.get('/find', userController.find);
routes.post('/create', userController.create);
routes.put('/update', userController.update);

module.exports = routes;