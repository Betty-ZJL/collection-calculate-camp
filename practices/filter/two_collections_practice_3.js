'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  return collection_a.filter( function (a) {
    return collection_b.some(function (b) { return a%b==0 })});

}

module.exports = choose_divisible_integer;
