const User = require('../models/userModel');

module.exports = {

    async index(req, res) {
        let users = await User.find();
        res.status(302).json(users);

    }
}