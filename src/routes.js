const { Router } = require('express');
const userController = require('./controllers/userController');

const routes = Router();

routes.get('/', (req, res) => {
    res.send('The Apllication is running!');
});

// User routes
routes.post('/create', userController.create);
routes.get('/find', userController.find);
routes.put('/update', userController.update);
routes.delete('/delete', userController.exclude);

module.exports = routes;