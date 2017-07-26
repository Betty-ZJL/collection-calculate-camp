'use strict';

function double_to_one(collection) {

  var result=[];
  for(let i=0;i<collection.length;i++)
    if(Array.isArray(collection[i])){
      for(let j=0;j<collection[i].length;j++)
        if(!result.includes(collection[i][j]))
          result.push(collection[i][j]);
    }
    else
      result.push(collection[i]);
  return result;
}

module.exports = double_to_one;
