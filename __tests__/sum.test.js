//const sum = require('../src/js/sum');
import sum from '../src/js/sum';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
