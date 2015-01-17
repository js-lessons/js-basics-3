var range = require('../solution').range;

describe("range", function() {
  it("returns array for range of numbers from 1 to 5", function() {
    expect(range(1, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  it("works with negative numbers", function() {
    expect(range(-5, 1)).toEqual([-5, -4, -3, -2, -1, 0, 1]);
  });

  it("takes step as a param", function() {
    expect(range(1, 10, 2)).toEqual([1, 3, 5, 7, 9]);
  });

  it("works with negative step values", function() {
    expect(range(5, 2, -1)).toEqual([5, 4, 3, 2]);
  });
});
