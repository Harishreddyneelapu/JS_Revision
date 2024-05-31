try {
    let result = 10 / 0;
    console.log(result);
    let x = y;
  } catch (error) {
    console.log("An error occurred: " + error.message);
  }
  
  try {
    let result = 10 / 0;
    console.log(result);
  } catch (error) {
    console.log("An error occurred: " + error.message);
  } finally {
    console.log("Finally block executed");
  }
  
  try {
    let age = 15;
    if (age < 18) {
      throw new Error("Age must be at least 18");
    }
  } catch (error) {
    console.log("Custom error: " + error.message);
  }
  
  try {
    try {
      let x = y;
    } catch (error) {
      console.log("Inner catch: " + error.message);
    }
    let result = 10 / 0;
    console.log(result);
  } catch (error) {
    console.log("Outer catch: " + error.message);
  }
  
  try {
    let result = 10 / 0;
    console.log(result);
    let x = y;
  } catch (error) {
    if (error instanceof ReferenceError) {
      console.log("ReferenceError: " + error.message);
    } else if (error instanceof TypeError) {
      console.log("TypeError: " + error.message);
    } else {
      console.log("Error: " + error.message);
    }
  }
  
  function checkAge(age) {
    if (age < 18) {
      throw new RangeError("Age must be at least 18");
    }
    return true;
  }
  
  try {
    checkAge(15);
  } catch (error) {
    if (error instanceof RangeError) {
      console.log("RangeError: " + error.message);
    } else {
      console.log("Error: " + error.message);
    }
  }
  
  function divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }
  
  try {
    let result = divide(10, 0);
    console.log(result);
  } catch (error) {
    console.log("An error occurred: " + error.message);
  } finally {
    console.log("Cleanup code can go here");
  }
  
  try {
    let person = { name: "Alice" };
    if (!person.age) {
      throw new Error("Age is required");
    }
  } catch (error) {
    console.log("Error: " + error.message);
  } finally {
    console.log("Execution continues...");
  }
  