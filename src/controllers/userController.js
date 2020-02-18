const User = require('../models/userModel');

module.exports = {

    async find(req, res) {
        let user = await User.find({ name: req.params.name }, 'name');
        (user.length > 0) ? res.status(302) : res.status(404);

        res.json(user)
    }
}