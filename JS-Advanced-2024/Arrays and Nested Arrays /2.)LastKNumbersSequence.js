//Task: You are given two integers n and k. Write a JS function that generates and return the following sequence:
// The first element is 1
// Every following element equals the sum of the previous k elements
// The length of the sequence is n elements
// The input comes as two number arguments. The first element represents the number n, and the second – the number k.
// The output is the return value of your function and should be an array of numbers.

//Solution:

function lastKNumbers(n, k) {

    let result = [1];
    for (let i = 1; i < n; i++) {
        let startingNumber = Math.max(0, i - k);
        let currentNumber = result.slice(startingNumber, startingNumber + k).reduce((acc, val) => acc + val, 0);
        result.push(currentNumber);
    }


    console.log(`[${result.join(', ')}]`);
}
lastKNumbers(6, 3);