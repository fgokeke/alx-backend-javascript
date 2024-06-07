const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return the sum of two rounded numbers', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
      expect(calculateNumber('SUM', 0.1, 0.3)).to.equal(0);
    });
  });

  describe('SUBTRACT', () => {
    it('should return the subtraction of two rounded numbers', () => {
      expect(calculateNumber('SUBTRACT', 5.5, 3.2)).to.equal(3);
      expect(calculateNumber('SUBTRACT', 1.2, 1.8)).to.equal(-1);
      expect(calculateNumber('SUBTRACT', 0.9, 0.4)).to.equal(1);
    });
  });

  describe('DIVIDE', () => {
    it('should return the division of two rounded numbers', () => {
      expect(calculateNumber('DIVIDE', 5.5, 2.1)).to.equal(3);
      expect(calculateNumber('DIVIDE', 11.9, 3.1)).to.equal(4);
    });

    it('should return "Error" when dividing by zero', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0.4)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 2.5, 0)).to.equal('Error');
    });
  });
});
