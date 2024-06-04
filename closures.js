function outerFunction() {
    let outerVariable = "I'm outside!";
  
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  const myClosure = outerFunction();
  myClosure(); 
  