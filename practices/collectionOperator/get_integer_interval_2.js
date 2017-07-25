'use strict';

function get_integer_interval_2(number_a, number_b) {
  var result=[];
	if(number_a<=number_b){
		if(number_a%2!=0)
			number_a++;
		for(i=number_a;i<=number_b;i=i+2)
			if(i%2==0)
				result.push(i);
	}
	else{
		if(number_a%2!=0)
			number_a--;
		for(i=number_a;i>=number_b;i=i-2)
			if(i%2==0)
				result.push(i);
	}
	return result;	
}

module.exports = get_integer_interval_2;
