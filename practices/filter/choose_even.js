'use strict';

function choose_even(collection) {

  return collection.filter( function (t) { return t%2==0; });

}

module.exports = choose_even;
