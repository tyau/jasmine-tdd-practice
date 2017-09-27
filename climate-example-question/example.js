/*
Example Question:
problem: given an input array of integers:
- return exception if array is empty or null
- return the value closest to 0
- if there are two values that are equally close to 0, return the (+) (example +2 and -2)
 
Since the goal is TDD, follow the RED GREEN REFACTOR.  
Make tests that fail,
 then make them pass (write code),
 then refactor as required (refactor code)
 
Darla: (HINT) Edge Cases: testing an outlier like: -5, 1, 2, 3, 4, 5 (how do you test -5 will be tested properly?) Since that’s not positive for example, less than 0.

TDD Approach (start small):
- testForEmptyArray ( example input: [] ) output=>exception
- testForNullArray ( example input: null )output=>exception
- testInputOneValue ( example input: 1)output=>1
- testInputTwoValues ( example input: 1, 2) output=>1 (just test pos 0 vs pos 1 and return whichever is smaller
- testInputAllPositive ( example input: 1, 2, 3) output=>3
- testInoutALlNegative ( ( example input: -1, -2) output=>-1
- testPositiveAndNegative (( example input: 1, 2, -5, 1) output=>1
- testRegularWithTwoEqualValues ( example input: 10, 2, -2) output=> 2
- testWithGivenInput [I can't remember the input they had]
 
For each test you write, MAKE SURE you only write code to make the tests pass.  DO NOT add anything else!!!!
*/

var closestToZero = function(inputArray){
	if( (typeof inputArray === "undefined") || inputArray === null ) {
		throw new Error("Input is null or undefined");
	}
	if(inputArray.constructor !== Array){
		throw new Error("Input is not an Array");
	}
	if(inputArray.length <= 0){
		throw new Error("Input array is empty");
	}

	var diffToZero = false;
	var ret = false;
	inputArray.forEach(function(number,index){
		if( ret === false || (Math.abs(number) < Math.abs(ret)) ){
			ret = number;
		} else if( (Math.abs(number) === Math.abs(ret)) && (number !== ret) ){
			ret = Math.abs(ret);
		}
	});

	return ret;
}




const Checkout = function () {}


Checkout.prototype.toBeReplaced = function() {
  return "I am the original function being called!";
};

Checkout.prototype.divergePath = function() {
  return "banana king";
};

Checkout.prototype.pathExample = function() {
	var ret = this.divergePath();
	return ret;
};

const items = {
	FR1: {name: 'Fruit tea', price: 3.11, discount: 'two for one'},
	SR1: {name: 'Strawberries', price: 5.00, discount: 'half price'},
	CF1: {name: 'Coffee', price: 11.23, discount: null}
}
