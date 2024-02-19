//Task: Write a JS function that processes the elements in an array one by one and produces a new array. If the current element is a negative number you must add it to the front of the array (as the first element of the array). Otherwise, if the current element is a positive number (or 0), you must add it to the end of the array (as the last element of the array).
// The input comes as an array of number elements.
// The output is printed on the console, each element on a new line.

//Solution:

function negativePositiveNum(arr) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            result.unshift(arr[i])
        } else {
            result.push(arr[i])
        }
    }
    console.log(result.join('\n'))
}
negativePositiveNum([7, -2, 8, 9])