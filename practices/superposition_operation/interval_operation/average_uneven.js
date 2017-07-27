'use strict';

function average_uneven(collection) {

  collection=collection.filter(function (t) { return t%2!=0 });
  return collection.reduce(function (a,b) { return a+b })/collection.length;
}

module.exports = average_uneven;
