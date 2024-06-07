// 6-payment_token.js
const getPaymentTokenFromAPI = (success) => {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    } else {
      // For simplicity, return undefined for failure case
      resolve();
    }
  });
};

module.exports = getPaymentTokenFromAPI;
