'use strict';

function get_integer_interval_2(number_a, number_b) {
    var result=[];
    if(number_a>number_b){
        let c=number_a;
        number_a=number_b;
        number_b=c;
    }
    if(number_a%2!=0)
        number_a++;
    while(number_a>number_b)
    return result;
}
}

module.exports = get_integer_interval_2;
