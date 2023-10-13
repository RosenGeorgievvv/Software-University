//Task: You are given an array of numbers. Write a function that prints the elements at odd positions from the array, doubled and in reverse order.

// The input comes as an array of number elements.

// The output is printed on the console on a single line, separated by space.

//Solution:

function oddNumbers(arr) {
let result = arr.filter((num, i) => i % 2 == 1).map(x => 2 * x).reverse().join(' ');
console.log(result)
}
oddNumbers([10, 15, 20, 25]);
