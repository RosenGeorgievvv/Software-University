//Task: Write a function that calculates and returns the sum of the first and the last elements in an array.
// The input comes as an array of string elements holding numbers.
// The output is the return value of your function and should be a number.

//Solution:

function sumFirstLastNumbers(arr) {
    console.log(Number(arr.shift()) + Number(arr.pop()));
    
}
sumFirstLastNumbers(['20', '30', '40'])

//second way:

function sumFirstLastNumbers(arr) {
    console.log(Number(arr[0]) + Number(arr[arr.length - 1]));
}
sumFirstLastNumbers(['20', '30', '40'])