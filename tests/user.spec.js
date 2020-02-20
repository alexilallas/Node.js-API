const chai = require('chai');
const http = require('chai-http');

const expect = chai.expect;
const { app } = require('../src/index');

chai.use(http);

const userTest = {
    name: "Alexi Lallas",
    age: 24,
    profission: "Programmer",
    bio: "I love tecnology and Animals"
}

describe('Integration test', () => {
    it('/find - GET', (done) => {
        chai.request(app)
            .get('/find')
            .query(userTest)
            .end((err, res) => {
                expect(res).to.have.status(302);
                done();
            });
    }),
    it('/create - POST', (done) => {
        chai.request(app)
            .post('/create')
            .query(userTest)
            .end((err, res) => {
                expect(res).to.have.status(201);
                done();
            });
    });
});