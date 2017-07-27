'use strict';
function rank_by_two_large_one_small(collection){
  collection=collection.sort(function (a,b) {return a-b});
  for(let i=0;i<=collection.length-3;i+=3){
    let x=collection[i];
    collection[i]=collection[i+1];
    collection[i+1]=collection[i+2];
    collection[i+2]=x;
  }
  return collection;
}
module.exports = rank_by_two_large_one_small;
