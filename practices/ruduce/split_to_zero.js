'use strict';

function spilt_to_zero(number, interval) {
  var result=[number];
  while(number>1e-6){
    number-=interval;
    result.push(parseFloat(number.toFixed(1)));
  }
  return result;
}

module.exports = spilt_to_zero;
