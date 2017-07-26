'use strict';
var number_map_to_word_over_26 = function(collection){
 return collection.map(function (t) {
    var letters=[];
    var y,c=t;//c-商，y-余数
    while(c!=0){
      y=c%26;
      if (y==0) {y=26;c--;}
      letters.push(String.fromCharCode(y+96));
      c=parseInt(c/26);
    }
    letters.reverse();
    return letters.join('');
  });
};

module.exports = number_map_to_word_over_26;
