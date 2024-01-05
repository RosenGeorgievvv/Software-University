//Task: Write a function that prints the two smallest elements from an array of numbers.
// The input comes as an array of number elements.
// The output is printed on the console on a single line, separated by space.

//Solution:

function smallestTwoNums(arr){

    let sorted = arr.sort((a, b) => a - b);
    let myArr = sorted.splice(0, 2);
    console.log(myArr.join(' '));
}
smallestTwoNums([30, 15, 50, 5])