'use strict';

function hybrid_operation_to_uneven(collection) {

 collection=collection.filter(function (t) { return t%2!=0 });
  collection=collection.map(function (t) { return t*3+5 });
  return collection.reduce(function (p1, p2) { return p1+p2 });
}

module.exports = hybrid_operation_to_uneven;

