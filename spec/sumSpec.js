var sum = require('../solution').sum;

describe("sum", function() {
  it("computes sum of numbers", function() {
    expect(sum([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ])).toEqual(55);
    expect(sum([ -1, 2, 4 ])).toEqual(5);
  });
});
