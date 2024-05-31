// Function declaration
function greet(name) {
    return "Hello, " + name + "!";
  }
  
  // Function expression
  const add = function(a, b) {
    return a + b;
  };
  
  // Arrow function (ES6)
  const multiply = (a, b) => a * b;
  
  console.log(greet("Alice")); 
  console.log(add(5, 10));
  console.log(multiply(4, 7)); 
  

  //Anonymous functions
  setTimeout(function() {
    console.log("This is an anonymous function");
  }, 1000);

  
  //iife
  (function() {
    console.log("This is an IIFE");
  })();

  
  //High order functions
  function greet(name) {
    return function(message) {
      return message + ", " + name + "!";
    };
  }
  
  const greetAlice = greet("Alice");
  console.log(greetAlice("Good morning"));
  
  