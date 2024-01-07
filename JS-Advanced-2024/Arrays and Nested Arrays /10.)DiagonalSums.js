//Task: A square matrix of numbers comes as an array of arrays, each array holding numbers. Write a function that finds the sum at the main and the secondary diagonals.
// The input comes as an array of arrays, containing number elements (2D matrix of numbers).
// The output is printed on the console, on a single line separated by space. First print the sum at the main diagonal, then the sum at the secondary diagonal.

//Solution:

function diagonal(arr) {

let diagonalOne = 0;
let diagonalTwo = 0;
let indexOne = 0;
let indexTwo = arr[0].length - 1;

arr.forEach(array => {
    diagonalOne += array[indexOne++];
    diagonalTwo += array[indexTwo--];
})
console.log(diagonalOne + ' ' + diagonalTwo);

}
diagonal([[20, 40],
[10, 60]])