//Task: You are given an array of numbers. Write a JS function that returns the elements at odd positions from the array, doubled and in reverse order.
// The input comes as an array of number elements.
// The output is the return on the console on a single line, separated by space.

//Solution:

function oddPosition(arr){

    return arr.filter((a, b) => b % 2 !== 0).map(x => x * 2).reverse().join(' ');

}
oddPosition([10, 15, 20, 25])