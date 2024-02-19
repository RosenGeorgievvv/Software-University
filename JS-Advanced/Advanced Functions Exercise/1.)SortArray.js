//Task: Write a function that sorts an array with numeric values in ascending or descending order, depending on an argument that is passed to it.

// You will receive a numeric array and a string as arguments to the function in your code.

// · If the second argument is asc, the array should be sorted in ascending order (smallest values first).

// · If it is desc, the array should be sorted in descending order (largest first).


//Solution:
function solve(arr, order){

    return arr.sort((a, b) => order === 'asc' ? a - b : b - a)
}

//secondway:

const solve = (arr, order) => arr.sort((a, b) => order === 'asc' ? a - b : b - a)


console.log(solve([14, 7, 17, 6, 8], 'asc'));
console.log(solve([14, 7, 17, 6, 8], 'desc'));