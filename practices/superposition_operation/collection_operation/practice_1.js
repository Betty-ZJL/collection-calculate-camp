'use strict';

function hybrid_operation(collection) {
  return collection.map(function (t) { return t*3+2 }).reduce(function (a,b) { return a+b});
}

module.exports = hybrid_operation;

