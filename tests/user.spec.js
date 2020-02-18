const chai = require('chai');
const http = require('chai-http');

const { app } = require('../src/index');
chai.use(http);

describe('Integration test', () => {
    it('/ - GET', () => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res).to.have.status(200);
            });
    }),
    it('/find/:name - GET', () => {
        chai.request(app)
            .get('find')
            .end((err, res) => {
                console.log(err)
                // chai.expect(err).to.be.null;
                // chai.expect(res).to.have.status(302);
                // chai.expect(res.body.length).to.be.equal(4);
                // chai.expect(res.body).to.containSubset([alunoSchema]);
            });
    });
});