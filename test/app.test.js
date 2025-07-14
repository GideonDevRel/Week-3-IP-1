const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Gallery App', () => {
  
  describe('GET /', () => {
    it('should return the main page', (done) => {
      chai.request(server)
        .get('/')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.text).to.include('Image Upload');
          done();
        });
    });
  });

  describe('POST /upload', () => {
    it('should handle file upload endpoint', (done) => {
      chai.request(server)
        .post('/upload')
        .end((err, res) => {
          // This test will fail without proper file but should not crash
          expect(res).to.have.status(302); // Redirect expected
          done();
        });
    });
  });
});