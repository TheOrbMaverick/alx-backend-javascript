const request = require('request');
const { expect } = require('chai');
const app = require('./api');  // Import the app to ensure the server is running during the test

describe('Index page', () => {
    const url = 'http://localhost:7865/';

    it('should return status code 200', (done) => {
        request(url, (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('should return the correct message', (done) => {
        request(url, (error, response, body) => {
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });
});
