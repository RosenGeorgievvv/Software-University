//Task:Write a function that calculates and prints the sum of the first and the last elements in an array.

// The input comes as an array of string elements holding numbers.

// The output is printed on the console.

//Solution:

function sumFirstAndLast(arr) {
  arr = arr.map(Number);

  console.log(arr.shift() + arr.pop());
  
}

sumFirstAndLast(["20", "30", "40"]);
