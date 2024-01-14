//Task: Write a function that extracts only those numbers that form a non-decreasing subset. In other words, you start from the first element and continue to the end of the given array of numbers. Any number which is LESS THAN the current biggest one is ignored, alternatively if it’s equal or higher than the current biggest one you set it as the current biggest one and you continue to the next number.

// The input comes as an array of numbers.

// The output is the processed array after the filtration, which should be a non-decreasing subset. Return the array of numbers.


//Solution:

function extractArray(arr){

    let result = [arr[0]];
    let maxNumber = arr[0];

    if (!arr || arr.length === 0) {
        return [];
    }

    for (let i = 1; i < arr.length; i++) {
        const num = arr[i];
        if (num >= maxNumber) {
            maxNumber = num;
            result.push(num);
        }
    }

    return result;
}
console.log(extractArray([1, 3, 8, 4, 10, 12, 3, 2, 24]))