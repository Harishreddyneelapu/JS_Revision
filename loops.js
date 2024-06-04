// Using a for loop
for (let i = 0; i < 5; i++) {
    console.log(`for loop iteration: ${i}`);
  }
  
  // Using a while loop
  let j = 0;
  while (j < 5) {
    console.log(`while loop iteration: ${j}`);
    j++;
  }
  
  // Using a do...while loop
  let k = 0;
  do {
    console.log(`do...while loop iteration: ${k}`);
    k++;
  } while (k < 5);
  
  // Using a for...of loop (iterating over an array)
  const array = [10, 20, 30, 40, 50];
  for (const value of array) {
    console.log(`for...of loop value: ${value}`);
  }
  
  // Using a for...in loop (iterating over an object)
  const object = { a: 1, b: 2, c: 3 };
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      console.log(`for...in loop key: ${key}, value: ${object[key]}`);
    }
  }
  