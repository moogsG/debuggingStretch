var assert = require("chai").assert;
var checkNum = require("../checkNum/checkNum");

describe("Number", function() {
  it("should return true if number is valid", function() {
    var num = "79927398713";
    var result = checkNum(num);
    assert.isTrue(result);
  });
    it("should return false", function() {
    var num = "792373";
    var result = checkNum(num);
    assert.isFalse(result);
  });
      it("should return true if number is valid", function() {
    var num = "5019717010103742";
    var result = checkNum(num);
    assert.isTrue(result);
  });
});