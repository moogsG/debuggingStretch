module.exports = popBottles;


function popBottles(input) {
  var total = input + input - 5;
  caps = parseInt(total/4);
  bottles = parseInt(total/2);
  capsR = total % 4;
  bottlesR = total % 2;
  console.log('Total bottles: ' + total);
  console.log('Total Caps: ' + caps);
  console.log('Total Bottles: ' + bottles);
  console.log('Remaining caps: ' + capsR);
  console.log('Remaining bottles: ' + bottlesR);
return total;
}

