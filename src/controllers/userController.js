const { userModel } = require('../models/userModel');

module.exports = {

    async find(req, res) {
        try {
            let user = await userModel.findOne({ name: req.query.name });
            if (user) {
                res.status(302).json(user);
            } else {
                res.status(404).json([]);
            }
        } catch (e) {
            res.status(500).json({ name: e.name, message: e.message, erros: e.errors });
        }
    },

    async create(req, res) {
        try {
            let user = new userModel(req.query);
            await user.validate();
            user.save();
            res.status(201).json(user);
        } catch (e) {
            res.status(500).json({ name: e.name, messagem: e._message, errors: e.errors })
        }
    },

    async update(req, res) {console.log(req.query)
        try {
            if (!req.query._id) {
                throw ({ name: 'field required', message: '_id field missing' });
            }
            let user = await userModel.updateOne({ _id: req.query._id }, req.query, { runValidators: true });
            res.status(200).json(user);
        } catch (e) {console.log(e)
            res.status(500).json({ name: e.name, messagem: e.message, errors: e.errors })
        }
    }
}