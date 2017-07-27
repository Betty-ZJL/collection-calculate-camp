'use strict';

function get_intersection(collection_a, collection_b) {
  return collection_b.filter( function (t) { return collection_a.includes(t) });
}

module.exports = get_intersection;
