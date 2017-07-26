'use strict';

function find_last_even(collection) {
  for(let value of collection.reverse())
    if(value%2==0)
      return value;
}

module.exports = find_last_even;
