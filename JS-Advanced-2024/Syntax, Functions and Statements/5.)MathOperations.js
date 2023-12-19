//Task: Write a JS function that takes two numbers and a string as an input. 

// The string may be one of the following: '+', '-', '*', '/', '%', '**'.

// Print on the console the result of the mathematical operation between both numbers and the operator you receive as a string.
// The input comes as two numbers and a string argument passed to your function.
// The output should be printed on the console.


//Solution:

function mathOperations(numOne, numTwo, str) {

    let sum;
    switch (str) {
        case "+": sum = numOne + numTwo; break;
        case "-": sum = numOne - numTwo; break;
        case "/": sum = numOne / numTwo; break;
        case "*": sum = numOne * numTwo; break;
        case "%": sum = numOne % numTwo; break;
        case "**": sum = numOne ** numTwo; break;
    }
    console.log(sum);
}
mathOperations(5, 6, '+')
