// Hoisting with var
console.log(varVariable); 
var varVariable = 'I am a var variable';
console.log(varVariable);

// Hoisting with let and const
try {
  console.log(letVariable);
} catch (e) {
  console.log(e.message);
}
let letVariable = 'I am a let variable';
console.log(letVariable); 

try {
  console.log(constVariable); 
} catch (e) {
  console.log(e.message);
}
const constVariable = 'I am a const variable';
console.log(constVariable);

// Hoisting with functions
console.log(hoistedFunction());

function hoistedFunction() {
  return 'This function is hoisted!';
}

// Combining variable and function hoisting
console.log(combinedVar); 
combinedFunction(); 

var combinedVar = 'Combined var hoisting';
function combinedFunction() {
  console.log('Combined function is hoisted!');
}
console.log(combinedVar); 

// Hoisting and IIFE (Immediately Invoked Function Expression)
(function() {
  console.log('This is an IIFE, executed immediately upon definition.');
})();

// Example with parameters in IIFE
(function(message) {
  console.log(message); 
})('Hello from IIFE with parameters!');

// IIFE with return value
const iifeResult = (function(a, b) {
  return a + b;
})(5, 3);
console.log(iifeResult); 

// Hoisting with function expressions and arrow functions
try {
  nonHoistedFunctionExpression(); 
} catch (e) {
  console.log(e.message);
}

var nonHoistedFunctionExpression = function() {
  console.log('This is a function expression, not hoisted like function declarations.');
};
nonHoistedFunctionExpression(); 

try {
  nonHoistedArrowFunction(); 
} catch (e) {
  console.log(e.message);
}

var nonHoistedArrowFunction = () => {
  console.log('This is an arrow function, also not hoisted like function declarations.');
};
nonHoistedArrowFunction(); 
