'use strict';

function compute_median(collection) {
  collection.sort(function (a,b) {return a-b});
  return (collection[parseInt(collection.length/2)] +collection[parseInt((collection.length-1)/2)])/2;
}

module.exports = compute_median;


