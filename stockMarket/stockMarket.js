/* given a list of stock prices for a given day, returns the maximum profit that could have been made by buying a stock at the given price and then selling the stock later on.
*/


/*
function maxProfit(arr) {
  var min = arr[0]; var max = 0; var last = false;
  arr.reduceRight(function(y, x, z){
    if (min > x && last) min = x;
    if (max < x && z > 0) max = x;
    last = true;
  }, 0)
  var profit = max - min;
  return profit;
}
*/

function maxProfit(arr) {
  var max = Math.max.apply(null, arr.slice(1));
  var min = Math.min.apply(null, arr.slice(-0));
  return max - min;
}

module.exports = maxProfit;
