'use strict';

function choose_no_repeat_number(collection) {
    var result=[];
    for(let i=0;i<collection.length;i++)
      if (!result.includes(collection[i]))
        result.push(collection[i]);
    return result;
}

module.exports = choose_no_repeat_number;
