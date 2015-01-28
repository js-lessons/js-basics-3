var deepEqual = require('../solution').deepEqual;

describe("deepEqual", function() {
  describe("comparing values by identity", function() {
    it("compares numerics", function() {
      expect(deepEqual(1, 1)).toBeTruthy();
      expect(deepEqual(2, 1)).toBeFalsy();
    });

    it("compares booleans", function() {
      expect(deepEqual(true, true)).toBeTruthy();
      expect(deepEqual(true, false)).toBeFalsy();
    });

    it("does not coerse types during comparison", function() {
      expect(deepEqual("1", 1)).toBeFalsy();
      expect(deepEqual(1, true)).toBeFalsy();
      expect(deepEqual("true", true)).toBeFalsy();
    });
  });

  describe("comparing values by reference", function() {
    var obj = { here: {is: "an"}, object: 2 };

    it("works with references to the same object", function() {
      expect(deepEqual(obj, obj)).toBeTruthy();
    });

    it("works with references to different objects", function() {
      expect(deepEqual(obj, {here: 1, object: 2})).toBeFalsy();
      expect(deepEqual(obj, {here: {is: "an"}, object: 2})).toBeTruthy();
      expect(deepEqual(obj, {here: {is: "an"}, object: 2, but: { with: "addition"}})).toBeFalsy();
    });

    it("works with references to null object", function() {
      expect(deepEqual(null, null)).toBeTruthy();
      expect(deepEqual(null, undefined)).toBeFalsy();
      expect(deepEqual(null, 0)).toBeFalsy();
      expect(deepEqual(null, {})).toBeFalsy();
    });
  });
});
