//Task: Write a program that receives 6 parameters which are a number and a list of five operations. Perform the operations sequentially by starting with the input number and using the result of every operation as a starting point for the next one. Print the result of every operation in order. The operations can be one of the following:
// chop - divide the number by two
// dice - square root of a number
// spice - add 1 to the number
// bake - multiply number by 3
// fillet - subtract 20% from the number
// The input comes as 6 string elements. The first element is the starting point and must be parsed to a number. The remaining 5 elements are the names of the operations to be performed.

//Solution:

function cookingTask(input) {
    let num = Number(input[0]);
 
    for (let i = 1; i < input.length; i++) {
 
        if (input[i] === 'chop') {
            num = num / 2;
            console.log(num);
        }
        else if (input[i] === 'dice') {
            num = Math.sqrt(num);
            console.log(num);
        }
        else if (input[i] === 'spice') {
            num += 1;
            console.log(num);
        }
        else if (input[i] === 'bake') {
            num *= 3;
            console.log(num);
        }
        else  {
            num = num - 0.2 * num;
            console.log(num);
        }
    }
}

cookingTask('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingTask('9', 'dice', 'spice', 'chop', 'bake', 'fillet')