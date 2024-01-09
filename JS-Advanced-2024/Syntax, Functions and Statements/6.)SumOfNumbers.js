//Task: Write a JS function that takes two numbers n and m as an input and prints the sum of all numbers from n to m.
// The input comes as two string elements that need to be parsed as numbers.
// The output should return the sum.


//Solution:

function sumOfNumbers(n, m){

    let numberOne = Number(n);
    let numberTwo = Number(m);

    let sum = 0;

    for(let i = numberOne; i <= numberTwo; i++){
        sum += i;
        
    }
return sum;
}
console.log(sumOfNumbers('1', '5'))