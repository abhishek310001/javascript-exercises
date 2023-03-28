const add = function(num1,num2) {
	return num1 + num2;
};

const subtract = function(num1,num2) {
	return num1 - num2;
};

const sum = function(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  let prod = 1;
  for ( i = 0; i < arr.length; i++) {
    prod *= arr[i];
  }
  return prod;
};

const power = function(num,power) {
	prod  = 1;
  for (let i = 0; i < power; i++) {
    prod *= num;
  }
  return prod;
};

const factorial = function(num) {
	fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
