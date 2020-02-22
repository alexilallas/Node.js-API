const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Name is required'], unique: true },
    age: { type: Number, min: 0, required: true },
    profission: { type: String, required: true },
    bio: { type: String, minlength: 10, required: true }
});

const userModel = mongoose.model('User', userSchema);

module.exports = { userModel, userSchema };
