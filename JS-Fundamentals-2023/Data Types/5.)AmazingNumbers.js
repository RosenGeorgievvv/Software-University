//Task: Write a function, which as input will receive a number.

// Check and print if it is amazing or not into the following format:

// "{number} Amazing? {True or False}"

// An amazing number includes the digit 9 the sum of its digits.

// Examples for amazing numbers are 1233 (1 + 2 + 3 + 3 = 9), 583472 (5 + 8 + 3 + 4 + 7 + 2 = 29)

//Solution:

function amazingNums(num) {
  num = num.toString();
  let sum = 0;

  
  for (let i = 0; i < num.length; i++) {
    sum += Number(num[i]);
  }
  let result = sum.toString().includes("9");
  console.log(result ? `${num} Amazing? True` : `${num} Amazing? False`);
}
amazingNums(999);
