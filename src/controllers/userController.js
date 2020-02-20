const { userModel } = require('../models/userModel');

module.exports = {

    async find(req, res) {
        let user = await userModel.findOne({ name: req.query.name });
        (user) ? res.status(302) : res.status(404);

        res.json(user);
    },

    async create(req, res) {
        console.log(req.query)
        try {
            let insert = await userModel.create(req.query);
        } catch (error) {
            console.log(error);
        }
        //(user) ? res.status(201) : res.status(500);

        //res.json(user)
    }
}