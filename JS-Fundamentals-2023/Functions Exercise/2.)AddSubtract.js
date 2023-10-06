//Task: You will receive three integer numbers.

// Write a function sum() to calculate the sum of the first two integers and a function subtract(), which subtracts the result of the function sum() and the third integer.

//Solution:

function addAndSubtract(num1,num2,num3){

let result1 = sum(num1, num2);
let result2= subtract(result1, num3)
    function sum(num1,num2){
        return num1 + num2;
    }

    function subtract(num1,num2){
       return num1 - num2;
    }
console.log(result2)
}
addAndSubtract(23,6,10);