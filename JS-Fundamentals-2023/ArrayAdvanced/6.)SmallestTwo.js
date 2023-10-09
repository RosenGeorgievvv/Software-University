//Task: Write a function that prints the two smallest elements from an array of numbers.

// The input comes as an array of number elements.

// The output is printed on the console on a single line, separated by space.

//Solution:

function smallestTwoNums(arr) {
  let sortedArr = arr
    .sort((a, b) => a - b)
    .slice(0, 2)
    .join(" ");
  console.log(sortedArr);
  
}
smallestTwoNums([30, 15, 50, 5]);
