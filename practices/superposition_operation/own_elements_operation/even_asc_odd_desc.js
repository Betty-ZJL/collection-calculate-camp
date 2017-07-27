'use strict';
var even_asc_odd_desc = function(collection){
  var ou=collection.filter(function (t) { return t%2==0 }).sort(function (a,b) {return a-b});
  var ji=collection.filter(function (t) { return t%2!=0 }).sort(function (a,b) {return b-a});
  return ou.concat(ji);
};
module.exports = even_asc_odd_desc;
