const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    profission: String,
    bio: String
});

const userModel = mongoose.model('User', userSchema);

module.exports = { userModel, userSchema };
