const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  // Set up the spy before each test
  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  // Restore the spy after each test
  afterEach(() => {
    consoleSpy.restore();
  });

  it('should log the correct total and call console once when called with 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);

    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });

  it('should log the correct total and call console once when called with 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);

    expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });
});
