function checkNum(value) {
  if (/[^0-9\s]+/.test(value)) return false; // checks for numbers and whitespace

  var check = 0;
  var num = 0;
  var isEven = false;

  Array.from(value).reduceRight(function (x, y) {
    //num = Number(y);
    num = parseInt(y);
    if (isEven){ // Doubles every other number
      if ((num *= 2) > 9) num -= 9;
    }
    check += num; //sum
    isEven = !isEven; //toggles doubling
  }, 0)
  return (check % 10) == 0; //Checks modulo
}
console.log(checkNum('5019717010103742'));
module.exports = checkNum;
