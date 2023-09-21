//Task: Write a function, which will be given a single number. Your task is to find the sum of its digits.

//Solution:

function sumDigits(input) {
  input = input.toString();
  let sum = 0;

  for (let i = 0; i < input.length; i++) {
    sum += Number(input[i]);
  }
  console.log(sum);
}
sumDigits(245678);
