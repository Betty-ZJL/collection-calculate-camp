'use strict';
var calculate_median = function(collection){
   var n=parseInt(collection.length/2);
   return (collection[parseInt(n/2)*2+1]+collection[(parseInt((n-1)/2))*2+1])/2;
};
module.exports = calculate_median;
