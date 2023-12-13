//Task: Write a JS function that takes three string arguments as an input. Calculate the sum of the length of the strings and the average length of the strings rounded down to the nearest integer.

//Solution:

function strLength(firstStr, secondStr, thirdStr) {
  let sum = firstStr.length + secondStr.length + thirdStr.length;

  console.log(sum);
  let average = Math.floor(sum / 3);
  console.log(average);
}
strLength("chocolate", "ice cream", "cake");
