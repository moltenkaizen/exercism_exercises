//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function (input) {
//
// YOUR CODE GOES HERE
  this.year = input;
//
};

Year.prototype.isLeap = function () {
//
// YOUR CODE GOES HERE
  var isDivisibleByFour = this.year % 4 === 0;
  var isDivisibleByOneHundred = this.year % 100 === 0;
  var isDivisibleByFourHundred = this.year % 400 === 0;
  if ((isDivisibleByFour && !isDivisibleByOneHundred) || isDivisibleByFourHundred) {
    return true;
  }
  return false;
};

module.exports = Year;
