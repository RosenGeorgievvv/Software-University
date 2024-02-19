//Task: Write a program, which receives an array of strings, parse them into numbers, and sum only the even numbers.

//Solution:

function sumEvenNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }
  let sum = 0;
  for (let num of arr) {
    if (num % 2 == 0) {
      sum += num;
    }
  }
  console.log(sum);
}
sumEvenNumbers(["1", "2", "3", "4", "5", "6"]);
