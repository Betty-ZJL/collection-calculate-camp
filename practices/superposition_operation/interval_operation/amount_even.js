'use strict';

function amount_even(collection) {

  collection=collection.filter(function (t) { return t%2==0 });
  return collection.reduce(function (a,b) { return a+b });
}

module.exports = amount_even;
