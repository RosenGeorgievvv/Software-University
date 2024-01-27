//Task: Write a program that keeps a number inside its context and returns a new function that adds a given number to the previous one.

//Solution:

function solve(number){
    let result = number;
    return function(num){
        return result + num;
    }
}
let add7 = solve(7);

console.log(add7(2));

console.log(add7(3));