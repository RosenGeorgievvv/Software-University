//Task: Write a program that receives a number n. For all numbers in the range [1…n] print the number and if it is special or not (True / False).

// · A number is special when its sum of digits is 5, 7 or 11.

//Solution:

function specialNumbers(input) {
  for (let i = 1; i <= input; i++) {
    let currentNum = i;
    let sumOfDigits = 0;
    while (currentNum > 0) {
      sumOfDigits += currentNum % 10;
      currentNum = Math.trunc(currentNum / 10);
    }

    let isSpecialNumber =
      sumOfDigits === 5 || sumOfDigits === 7 || sumOfDigits === 11;
    console.log(isSpecialNumber ? `${i} -> True` : `${i} -> False`);
  }
}
specialNumbers(15);
