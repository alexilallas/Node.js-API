const mongoose = require('mongoose');
const { DATABASE } = require('../env');

module.exports = {
    refreshDatabase(done) {
        mongoose.connect('mongodb://localhost/' + DATABASE, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, () => {
            mongoose.connection.db.dropDatabase();
            done();
        });
    }
}