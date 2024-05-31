let arr = [1, 2, 3, 4, 5];
arr.forEach((num) => {
  console.log(num);
});

let arr1 = [1, 2, 3, 4, 5];
let evenNumbers = arr1.filter(num => num % 2 === 0);
console.log(evenNumbers); 

let arr2 = [1, 2, 3, 4, 5];
let doubled = arr2.map(num => num * 2);
console.log(doubled); 


let arr4 = [1, 2, 3, 4, 5];
let sum = arr4.reduce((acc, num) => acc + num, 0);
console.log(sum);
