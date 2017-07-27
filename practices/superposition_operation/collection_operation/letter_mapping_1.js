'use strict';

function even_to_letter(collection) {
  var result=[];
  for(let item of collection){
    if(item%2==0)
      result.push(String.fromCharCode(item+96));
  }
  return result;
}

module.exports = even_to_letter;
