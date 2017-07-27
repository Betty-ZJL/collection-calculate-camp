'use strict';

function median_to_letter(collection) {

  var median=collection[parseInt(collection.length/2)];
  var letters=[String.fromCharCode(parseInt(median/26)+96),String.fromCharCode(parseInt(median%26)+96)];
  return letters.join('');
}

module.exports = median_to_letter;
