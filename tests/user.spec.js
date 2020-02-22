const chai = require('chai');
const http = require('chai-http');

const expect = chai.expect;
const { app } = require('../src/index');
const { refreshDatabase } = require('./refreshDatabase');

chai.use(http);

const userTest = {
    _id: "5e5091467c671e1dbc96e824",
    name: "Alexi Lallas",
    age: 24,
    profission: "Programmer",
    bio: "I love tecnology and Animals"
}

describe('Integration test', () => {
    before((done) => {
        refreshDatabase(done);
    });
    it('/create - POST', (done) => {
        chai.request(app)
            .post('/create')
            .query(userTest)
            .end((err, res) => {
                expect(res).to.have.status(201);
                done();
            });
    }),

    it('/find - GET', (done) => {
        chai.request(app)
            .get('/find')
            .query(userTest)
            .end((err, res) => {
                expect(res).to.have.status(302);
                done();
            });
    }),

    it('/update - PUT', (done) => {
        chai.request(app)
            .put('/update')
            .query(userTest)
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    })

});