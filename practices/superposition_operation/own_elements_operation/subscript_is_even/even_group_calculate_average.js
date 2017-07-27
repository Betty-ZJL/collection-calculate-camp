'use strict';

function avr(arr){
  return arr.reduce(function (p1, p2) { return p1+p2 })/arr.length;
}

var even_group_calculate_average = function(collection){
  var o=[];
  for(var i=1;i<collection.length;i+=2)
    o.push(collection[i]);
  o=o.filter(function (t) { return t%2==0 });
  if (o.length==0)
    return [0];
  else{
    var o_1=o.filter(function (t) { return t<10 });
    var o_2=o.filter(function (t) { return t<100&&t>9 });
    var o_3=o.filter(function (t) { return t<1000&&t>99 });
    if(o_1.length==0&&o_2.length==0)
      return [avr(o_3)];
    else
      return [avr(o_1),avr(o_2),avr(o_3)];
  }
};

module.exports = even_group_calculate_average;
