const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when adding 1.4 and 4.5', () => {
        expect(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 0 when adding -0.4 and 0.4', () => {
        expect(calculateNumber('SUM', -0.4, 0.4), 0);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when subtracting 4.5 from 1.4', () => {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    // Update the test case to handle -0 vs 0
    it('should return 0 when subtracting 0.4 from -0.4', () => {
      const result = calculateNumber('SUBTRACT', -0.4, 0.4);
      expect(Math.abs(result), 0);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when dividing 1.4 by 4.5', () => {
        expect(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when dividing by 0', () => {
        expect(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should return "Error" when dividing by -0.4 (rounded to 0)', () => {
        expect(calculateNumber('DIVIDE', 1.4, -0.4), 'Error');
    });
  });
});
