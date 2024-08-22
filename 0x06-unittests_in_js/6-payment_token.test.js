const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with the correct data when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done();  // Ensure the test completes after the assertion
      })
      .catch((error) => done(error));
  });

  it('should do nothing when success is false', (done) => {
    getPaymentTokenFromAPI(false)
      .then(() => done(new Error('Promise should not be resolved')))
      .catch(() => done());
  });
});
