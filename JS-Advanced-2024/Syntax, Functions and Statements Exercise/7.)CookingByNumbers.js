//Task: Write a program that receives 6 parameters which are a number and a list of five operations. Perform the operations sequentially by starting with the input number and using the result of every operation as a starting point for the next one. Print the result of every operation in order. The operations can be one of the following:
// chop - divide the number by two
// dice - square root of a number
// spice - add 1 to the number
// bake - multiply number by 3
// fillet - subtract 20% from the number
// The input comes as 6 string elements. The first element is the starting point and must be parsed to a number. The remaining 5 elements are the names of the operations to be performed.

//Solution:

function cookingTask(str) {

    let num = Number(str[0]);

    for (let i = 1; i < str.length; i++) {

        if (str[i] === 'chop') {
            num /= 2;
            console.log(num);
        }
        else if (str[i] === 'dice') {
            num = Math.sqrt(num);
            console.log(num);
        }
        else if (str[i] === 'spice') {
            num += 1;
            console.log(num);
        }
        else if (str[i] === 'bake') {
            num *= 3;
            console.log(num);
        }
        else if(str[i] === 'fillet'){
            num = num - 0.20 * num;
            console.log(num);
        }
    }
}
cookingTask(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
cookingTask([9, 'dice', 'spice', 'chop', 'bake', 'fillet'])