'use strict';

function average_to_letter(collection) {
  var avr=collection.reduce(function(total,num){return total+num})/collection.length;
  return String.fromCharCode(Math.ceil(avr)+96);
}

module.exports = average_to_letter;

