import { expect } from 'chai';
import NumbersValidator from '../../app/numbers_validator.js';

describe('isAllNumbers positive tests', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return true when provided with an array of numbers', () => {
    const arrayOfNumbers = [10, 23, 30, 45, 50];
    const validationResults = validator.isAllNumbers(arrayOfNumbers);
    expect(validationResults).to.be.equal(true);
  });

  it('should return false when provided with an odd number', () => {
    const arrayOfNumbers = [10, 23, 30, 'seven', 50];
    const validationResults = validator.isAllNumbers(arrayOfNumbers);
    expect(validationResults).to.be.equal(false);
  });

  it('should throw an error when provided a string', () => {
    // const arrayOfNumbers = 10;
    expect(() => {
      validator.isAllNumbers(10);
    }).to.throw('[10] is not an array');
  });
});
