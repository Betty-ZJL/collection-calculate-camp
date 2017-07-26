'use strict';

function grouping_count(collection) {
  var result={};
  for(let i=0;i<collection.length;i++)
    if (!result.hasOwnProperty(collection[i]))
      result[collection[i]]=1;
    else
      result[collection[i]]++;
  return result;
}

module.exports = grouping_count;
