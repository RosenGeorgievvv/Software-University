//Task: Write a function that receives a number and checks if that number is perfect or NOT.

// A perfect number is a positive integer that is equal to the sum of its proper positive divisors. That is the sum of its positive divisors excluding the number itself (also known as its aliquot sum).

//Solution:

function perfectNum(num) {
  let sumProper = 0;

  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      sumProper += i;
    }
  }
  if (sumProper == num) {
    console.log("We have a perfect number!");
  } else {
    console.log("It's not so perfect.");
  }
}
perfectNum(6);
