'use strict';

function collect_max_number(collection) {
   var max=collection[0];
   for (let value of collection)
     if (value>max)
      max=value;
   return max;
}

module.exports = collect_max_number;
