//Task: Write a function that finds the elements at even positions in an array.
// The input comes as an array of string elements.
// The output is printed on the console. Collect all elements in a string, separated by space.

//Solution:

function evenElements(arr){

    let result = " ";
    for(let i = 0; i < arr.length; i+=2){
        result += arr[i] + " "

    }
console.log(result);
}
evenElements(['20', '30', '40', '50', '60'])
