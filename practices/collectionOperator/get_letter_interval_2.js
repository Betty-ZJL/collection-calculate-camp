'use strict';

function get_letter_interval_2(number_a, number_b) {
  var c,y;
  var flag=0;
  var result=[];
  if(number_a>number_b){
    y=number_a;
    number_a=number_b;
    number_b=y;
    flag=1;
  }
  for(let i=number_a;i<=number_b;i++){
    let letters=[];
    c=i;
    while(c!=0){
      y=c%26;
      if (y==0) {y=26;c--;}
      letters.push(String.fromCharCode(y+96));
      c=parseInt(c/26)
    }
    letters.reverse();
    result.push(letters.join(''));
  }
  if(flag)
    return result.reverse();
  else
    return result;
}

module.exports = get_letter_interval_2;

