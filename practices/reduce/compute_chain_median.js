'use strict';

function compute_chain_median(collection) {
  var arrayStr,arrayInt=[];
  for(let i=0;i<collection.length;i+=2)
    arrayStr=collection.split('->');
  for(let value of arrayStr)
    arrayInt.push(parseInt(value));
  arrayInt.sort(function (a,b) {return a-b});
  return (arrayInt[parseInt(arrayInt.length/2)] +arrayInt[parseInt((arrayInt.length-1)/2)])/2;
}

module.exports = compute_chain_median;
