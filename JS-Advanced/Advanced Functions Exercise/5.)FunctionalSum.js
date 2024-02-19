//Task: Write a function that adds a number passed to it to an internal sum and returns itself with its internal sum set to the new value, so it can be chained functionally.

// Hint: Overwrite toString() of the function.

// Input

// Your function needs to take one numeric argument.

// Output

// Your function needs to return itself with an updated context.


//Solution:

function add(num){

    function sum(a){
        num += a;
        return sum;
    }

    sum.toString = function(){
        return num.toString();
    }
    return sum;
}

console.log(add(1)(6)(-3).toString());