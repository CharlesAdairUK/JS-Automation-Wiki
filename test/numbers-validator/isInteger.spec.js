import { expect } from 'chai';
import NumbersValidator from '../../app/numbers_validator.cjs';

const NumbersValidator = require('../../app/numbers_validator.cjs');

describe('isInteger positive tests', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return true when provided with an integer number', () => {
    const validationResults = validator.isInteger(4);
    expect(validationResults).to.be.equal(true);
  });

  it('should return false when provided with an non-integer number', () => {
    const validationResults = validator.isInteger(5.5);
    expect(validationResults).to.be.equal(false);
  });

  it('should throw an error when provided a string', () => {
    expect(() => {
      validator.isInteger('4');
    }).to.throw('[4] is not a number');
  });
});
