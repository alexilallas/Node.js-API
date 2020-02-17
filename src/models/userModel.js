const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    profision: String,
    bio: String
});

module.exports = mongoose.model('User', userSchema);
