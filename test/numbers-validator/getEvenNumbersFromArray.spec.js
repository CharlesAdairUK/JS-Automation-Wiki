import { expect } from 'chai';
import NumbersValidator from '../../app/numbers_validator.js';

describe('isArrayEven positive tests', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return an array of even numbers', () => {
    const arrayOfNumbers = [10, 23, 30, 45, 50];
    const validationResults = validator.getEvenNumbersFromArray(arrayOfNumbers);
    expect(validationResults).to.be.eql([10, 30, 50]);
  });

  it('should throw an error if array is not full of numbers', () => {
    const arrayOfValues = [10, '23', 30, 45, 50];
    expect(() => {
      validator.getEvenNumbersFromArray(arrayOfValues);
    }).to.throw('[10,23,30,45,50] is not an array of "Numbers"');
  });
});
