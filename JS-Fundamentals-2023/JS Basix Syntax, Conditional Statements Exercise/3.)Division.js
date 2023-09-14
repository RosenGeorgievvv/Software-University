//Task: You will be given a number and you have to check whether that number is divisible by any of the following numbers: 2, 3, 6, 7, and 10. You should always take the bigger division.

// If the number is divisible by both 2 and 3 it is also divisible by 6 and you should print only the division by 6. If a number is divisible by 2 it is sometimes also divisible by 10 and you should print the division by 10.

// If the number is not divisible by any of the given numbers print: "Not divisible". Otherwise, print: "The number is divisible by {number}".

//Solution:

function division(num) {
  let number = Number(num);
  let count = 0;

  if (number % 10 == 0) {
    count = 10;
  } else if (number % 7 == 0) {
    count = 7;
  } else if (number % 6 == 0) {
    count = 6;
  } else if (number % 3 == 0) {
    count = 3;
  } else if (number % 2 == 0) {
    count = 2;
  }

  if (count > 0) {
    console.log(`The number is divisible by ${count}`);
  } else {
    console.log("Not divisible");
  }
}
division("30");
