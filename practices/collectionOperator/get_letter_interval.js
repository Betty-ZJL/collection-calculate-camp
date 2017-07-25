'use strict';

function get_letter_interval(number_a, number_b) {
    var result=[String.fromCharCode(number_a+96)];
    while(number_a!=number_b){
        if(number_a<=number_b)
            result.push(String.fromCharCode((++number_a)+96));
        else
            result.push(String.fromCharCode((--number_a)+96));
    }
    return result;
}

module.exports = get_letter_interval;
