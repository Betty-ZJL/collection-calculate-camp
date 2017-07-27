'use strict';
var calculate_average = function(collection){
   var avr=0;
   for(let i=1;i<collection.length;i+=2)
      avr=avr+collection[i];
   return avr/parseInt(collection.length/2);
};
module.exports = calculate_average;
