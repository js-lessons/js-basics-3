var reverseArray = require('../solution').reverseArray,
  reverseArrayInPlace = require('../solution').reverseArrayInPlace;

describe("reverse functions", function() {
  beforeEach(function() {
    spyOn(Array.prototype, 'reverse');
  });

  describe("reverseArray", function() {
    it("should return reversed array without modifying original one", function() {
      var a = [1, 2, 4, 6];

      expect(reverseArray(a)).toEqual([6, 4, 2, 1]);
      expect(a).toEqual([1, 2, 4, 6]);

      expect(Array.prototype.reverse).not.toHaveBeenCalled();
    });
  });

  describe("reverseArrayInPlace", function() {
    it("should return reversed array with modifying original one", function() {
      var a = [1, 2, 4, 6];
      expect(reverseArrayInPlace(a)).toEqual([6, 4, 2, 1]);
      expect(a).toEqual([6, 4, 2, 1]);

      expect(Array.prototype.reverse).not.toHaveBeenCalled();
    });
  });
});
