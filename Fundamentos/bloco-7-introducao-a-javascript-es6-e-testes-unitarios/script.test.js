// sum.js
const sum = require('./script');
const {expect} = require('expect');


test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});