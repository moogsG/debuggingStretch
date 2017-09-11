var assert = require("chai").assert;
var checkNum = require("../checkNum/checkNum");
var maxProfit = require('../stockMarket/stockMarket');
var popBottles = require('../popBottles/popBottles');

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
describe('MaxProfit', function () {
  it('should return true', function () {
    var arr = [45, 24, 35, 31, 40, 38, 11];
    var result = maxProfit(arr);
    assert.equal(result, 16);
  })
  it('should return true', function () {
    var arr = [11, 24, 35, 31, 40, 38, 45];
    var result = maxProfit(arr);
    assert.equal(result, 34);

  })
    it('should return true', function () {
    var arr = [1, 24, 35, 21, 40, 88, 45];
    var result = maxProfit(arr);
    assert.equal(result, 87);

  })
      it('should return true', function () {
    var arr = [11, 10, 35, 31, 40, 38, 35];
    var result = maxProfit(arr);
    assert.equal(result, 30);

  })
})
describe('popBottles', function () {
  it('should return true', function () {
    var result = popBottles(10);
    assert.equal(result, 15);
  })
  it('should return true', function () {
    var result = popBottles(20);
    assert.equal(result, 35);

  })
    it('should return true', function () {
    var result = popBottles(30);
    assert.equal(result, 55);

  })
      it('should return true', function () {
    var arr = [11, 10, 35, 31, 40, 38, 35];
    var result = popBottles(40);
    assert.equal(result, 75);

  })
})