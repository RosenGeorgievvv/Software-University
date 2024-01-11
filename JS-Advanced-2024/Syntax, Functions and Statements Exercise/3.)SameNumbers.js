//Task: Write a function that takes an integer number as an input and check if all the digits in a given number are the same or not.
// Print on the console true if all numbers are the same and false if not. On the next line print the sum of all digits.
// The input comes as an integer number.

//Solution:

function duplicateNums(num) {

    let sum = 0;
    let isTrue = true;
    let digit = num % 10;

    

    while (num !== 0) {
        let current = num % 10;
        sum += current;
        if (current !== digit) {
            isTrue = false;
        }
        num = Math.floor(num / 10);
    }
    console.log(isTrue);
    console.log(sum);
}
duplicateNums(2222222)