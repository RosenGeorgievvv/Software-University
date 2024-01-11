//Task: Write a function that takes two positive numbers as input and compute the greatest common divisor.	
// The input comes as two positive integer numbers.

//Solution:

function commonDivisor(firstNum, secondNum) {

    let divisor;



    
    while (secondNum !== 0) {
        divisor = secondNum;
        secondNum = firstNum % secondNum;
        firstNum = divisor;
    }
    console.log(divisor);
}
commonDivisor(15, 5);