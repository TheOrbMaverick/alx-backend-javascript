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

describe('Available payments', () => {
    it('should return the correct payment methods', (done) => {
        const url = 'http://localhost:7865/available_payments';
        request(url, (error, response, body) => {
            const expectedResponse = {
                payment_methods: {
                    credit_cards: true,
                    paypal: false
                }
            };
            expect(response.statusCode).to.equal(200);
            expect(JSON.parse(body)).to.deep.equal(expectedResponse);
            done();
        });
    });
});

describe('Login', () => {
    it('should return a welcome message with the username', (done) => {
        const url = 'http://localhost:7865/login';
        const payload = { userName: 'Betty' };

        request.post({
            url,
            json: payload
        }, (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Welcome Betty');
            done();
        });
    });
});
