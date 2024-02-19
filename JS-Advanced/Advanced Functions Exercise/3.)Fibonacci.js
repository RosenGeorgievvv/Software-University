//Task: Write a JS function that when called, returns the next Fibonacci number, starting at 0, 1. Use a closure to keep the current number.

// Input

// There will be no input.

// Output

// The output must be a Fibonacci number and must be returned from the function.


//Solution:

function solve(){

    let previous = 0;
    let current = 1;

    function fibonacci(){
        let next = previous + current;
        previous = current;
        current = next;
        return previous
    }
    return fibonacci;
}

let fib = solve();
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
