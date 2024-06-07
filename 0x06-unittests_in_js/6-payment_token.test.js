// 6-payment_token.test.js
const chai = require('chai');
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should resolve with the correct object when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        expect(result).to.deep.equal({ data: 'Successful response from the API' });
        done(); // Call done() to signal that the test is complete
      })
      .catch((error) => {
        done(error); // If there's an error, pass it to done() to fail the test
      });
  });
});
