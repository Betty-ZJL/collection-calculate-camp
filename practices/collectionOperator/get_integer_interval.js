'use strict';

function get_integer_interval(number_a, number_b) {
    var result=[number_a];
    while(number_a!=number_b){
        if(number_a<=number_b)
            result.push(++number_a) ;
        else
            result.push(--number_a);      
    }
    return result;
}

module.exports = get_integer_interval;

