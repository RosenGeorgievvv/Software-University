//Task: Write a program, which receives an array of strings. Your task is to reverse the array without creating a new array. Print the resulting elements on a single line, space-separated

//Solution:

function reverseInPlace(arr){

    let firstEl = arr.shift();
    let lastEl = arr.pop();
    arr.push(firstEl);
    arr.unshift(lastEl);
    console.log(arr.join(" "))

}
reverseInPlace(['a', 'b', 'c', 'd', 'e'])