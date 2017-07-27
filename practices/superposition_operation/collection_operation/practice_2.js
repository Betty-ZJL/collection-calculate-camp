'use strict';

function hybrid_operation_to_uneven(collection) {

  collection=collection.filter(function (t) { return t%2!=0 });
  return collection.map(function (t) { return t*3+2 });
}

module.exports = hybrid_operation_to_uneven;

