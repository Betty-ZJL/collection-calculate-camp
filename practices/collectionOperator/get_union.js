'use strict';

function get_union(collection_a, collection_b) {
  collection_b=collection_b.filter( function (t) { return !collection_a.includes(t) });
  return collection_a.concat(collection_b);
 
}

module.exports = get_union;

