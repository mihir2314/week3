var chai = require('chai');
var chaiHttp = require('chai-http');
const request = require('supertest');
require('../index.js');
chai.use(chaiHttp);

let app = 'http://localhost:1010';
const expect = chai.expect;

describe('Get/ send', () => {
    it('get all data from database', (done) => {
        request(app)
            .get('/read')
            .set('Accept', 'Application.json')
            .expect(200)
            .then(
                //console.log("test success")
            )
        done()
    })


    it('get single user data from database', (done) => {
        request(app)
            .get('/read/4')
            .set('Accept', 'Application.json')
            .expect(200)
            .then(
                //console.log("test success")
            )
        done()
    })


})
