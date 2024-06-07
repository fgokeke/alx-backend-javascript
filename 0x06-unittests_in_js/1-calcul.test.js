const assert = require('assert');
const calculateNumber = require('./1-calcul')

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return the sum of two rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
      assert.strictEqual(calculateNumber('SUM', 0.1, 0.3), 0);
    });
  });

  describe('SUBTRACT', () => {
    it('should return the subtraction of two rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.5, 3.2), 3);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 1.8), -1);
      assert.strictEqual(calculateNumber('SUBTRACT', 0.9, 0.4), 1);
    });
  });

  describe('DIVIDE', () => {
    it('should return the division of two rounded numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.5, 2.1), 3);
      assert.strictEqual(calculateNumber('DIVIDE', 11.9, 3.1), 4);
    });

    it('should return "Error" when dividing by zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.4), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 2.5, 0), 'Error');
    });
  });
});
