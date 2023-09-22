//Task: Write a program, which receives a number n and an array of elements. Your task is to create a new array with n numbers from the original array, reverse it and print its elements on a single line, space-separated

//Solution:

function reverse(n, arr){

    let reversedArr = [];
    for(let i = 0; i < n; i++){
        reversedArr.push(arr[i]);

    }
   let fixed = reversedArr.reverse();
   console.log(fixed.join(" "))

}
reverse(3, [10, 20, 30, 40, 50])