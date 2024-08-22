const request = require('request');
const { expect } = require('chai');

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

describe('Cart page', () => {
    it('should return status code 200 when id is a number', (done) => {
        const url = 'http://localhost:7865/cart/12';
        request(url, (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Payment methods for cart 12');
            done();
        });
    });

    it('should return status code 404 when id is NOT a number', (done) => {
        const url = 'http://localhost:7865/cart/hello';
        request(url, (error, response, body) => {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });
});
