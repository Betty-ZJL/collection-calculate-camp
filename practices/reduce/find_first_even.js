'use strict';

function find_first_even(collection) {
   for(let value of collection)
    if(value%2==0)
      return value;
}

module.exports = find_first_even;

