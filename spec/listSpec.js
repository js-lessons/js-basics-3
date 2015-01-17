var arrayToList = require('../solution').arrayToList,
  listToArray = require('../solution').listToArray,
  prepend = require('../solution').prepend,
  nth = require('../solution').nth;

describe("list type functions", function() {
  var listExample1 = {
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null
      }
    }
  },

  listExample2 = {
    value: "this",
    rest: {
      value: "is",
      rest: {
        value: "list",
        rest: {
          value: "!!!!111",
          rest: null
        }
      }
    }
  };

  describe("arrayToList", function() {
    it("converts array to list", function() {
      expect(arrayToList([1, 2, 3])).toEqual(listExample1);
      expect(arrayToList(["this", "is", "list", "!!!!111"])).toEqual(listExample2);
    });

    it("is able to create list with one item", function() {
      expect(arrayToList(["one"])).toEqual({ value: "one", rest: null });
    });
  });

  describe("listToArray", function() {
    it("converts list to array", function() {
      expect(listToArray(listExample1)).toEqual([1, 2, 3]);
      expect(listToArray(listExample2)).toEqual(["this", "is", "list", "!!!!111"]);
    });
  });

  describe("prepend", function() {
    it("adds an item to the beginning of the list", function() {
      expect(prepend(0, listExample1)).toEqual({ value: 0, rest: listExample1 });
      expect(prepend("truly", listExample2)).toEqual({ value: "truly", rest: listExample2 });
    });
  });

  describe("nth", function() {
    it("returns nth list item if it exists", function() {
      expect(nth(0, listExample1)).toEqual(1);
      expect(nth(1, listExample1)).toEqual(2);
    });

    it("returns undefined if item doesnt exist", function() {
      expect(nth(5, listExample1)).toBeUndefined();
    });
  });
});
