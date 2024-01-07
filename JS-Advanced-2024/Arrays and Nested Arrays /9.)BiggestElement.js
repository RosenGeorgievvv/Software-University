//Task: Write a function that finds the biggest element inside a matrix.
// The input comes as an array of arrays, containing number elements (2D matrix of numbers).
// The output is the return value of your function. Find the biggest element and return it.

//Solution:

function biggestEl(arr) {

    let result = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > result) {
                result = arr[i][j];
            }
        }
    }
    return result
}
console.log(biggestEl([[20, 50, 10],
[8, 33, 145]]))