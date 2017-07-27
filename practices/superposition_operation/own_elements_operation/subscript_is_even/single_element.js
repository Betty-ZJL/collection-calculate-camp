'use strict';
var single_element = function(collection){
   var arr=[];
   for(let i=1;i<collection.length;i+=2)
     arr.push(collection[i]);
   return arr.filter(function (t) { return arr.indexOf(t)==arr.lastIndexOf(t) });
};
module.exports = single_element;
