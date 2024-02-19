//Task: Write a function that processes the elements in an array one by one and produces a new array. Prepend each negative element at the front of the array (as the first element) and append each positive (or 0) element at the end of the array.

// The input comes as an array of string elements holding numbers.

// The output is printed on the console, each element on a new line.

//Solution:

function fromNegativeToPositive(arr) {
  let newArr = [];
  for (let num of arr) {
    if (num < 0) {
      newArr.unshift(num);
    } else {
      newArr.push(num);
    }
  }
  console.log(newArr.join("\n"));
}
fromNegativeToPositive(["7", "-2", "8", "9"]);
