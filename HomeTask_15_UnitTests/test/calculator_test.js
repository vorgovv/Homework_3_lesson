const { expect } = require('chai');
const Calculator = require('../src/calculator.js');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('should add numbers correctly', () => {
    expect(calculator.add(43, 23, 65)).to.equal(131);
  });

  it('should multiply numbers correctly', () => {
    expect(calculator.multiply(6, 34, 91)).to.equal(18564);
  });

  it('should subtract numbers correctly', () => {
    expect(calculator.subtraction(515, 423)).to.equal(92);
  });

  it('should divide numbers correctly', () => {
    expect(calculator.divide(450, 90)).to.equal(5);
  });

  it('should exponentiate numbers correctly', () => {
    expect(calculator.exponentiation(13)).to.equal(169);
  });
  
  it('should throw an error for division by zero', () => {
    expect(() => calculator.divide(999, 0)).to.throw('Cannot divide by zero');
  });
});