const { userModel } = require('../models/userModel');


function throwError(e) {
    throw ({ name: e.name, messagem: e._message, errors: e.errors })
}

async function validator(req, res) {
    try {
        if (!req.query._id) {
            return res.status(500).json({ name: 'field required', message: '_id field missing' });
        }    
    } catch (e) {
        throwError(e)
    }
    

    // if (!await userModel.findOne({ _id: req.query._id })) {
    //     res.status(404).json({ name: 'user not found' });
    // }

}

async function create(req, res) {
    try {
        let user = new userModel(req.query);
        await user.validate();
        user.save();
        res.status(201).json(user);
    } catch (e) {
        throwError(e);
    }
}

async function find(req, res) {
    try {
        validator(req, res);
        let user = await userModel.findOne({ _id: req.query._id });
        res.status(302).json(user);
    } catch (e) {
        throwError(e);
    }
}

async function update(req, res) {
    try {
        await validator(req, res);
        let result = await userModel.updateOne({ _id: req.query._id }, req.query, { runValidators: true });
        res.status(200).json(result);
    } catch (e) {
        throwError(e);
    }
}

async function exclude(req, res) {
    try {
        validator(req, res);
        let result = await userModel.deleteOne({ _id: req.query._id })
        res.status(200).json(result);
    } catch (e) {
        throwError(e);
    }
}

module.exports = { create, find, update, exclude }