'use strict';
var number_map_to_word = function(collection){
  return collection.map(function (t) { return String.fromCharCode(t+96) });
};

module.exports = number_map_to_word;
