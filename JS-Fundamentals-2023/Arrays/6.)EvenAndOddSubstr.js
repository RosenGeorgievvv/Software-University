//Task: Write a program that calculates the difference between the sum of the even and the sum of the odd numbers in an array.

//Solution:

function evenAndOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }
  let even = 0;
  let odd = 0;

  for (let num of arr) {
    if (num % 2 == 0) {
      even += num;
    } else {
      odd += num;
    }
  }
  console.log(even - odd);
}
evenAndOdd([1, 2, 3, 4, 5, 6]);
