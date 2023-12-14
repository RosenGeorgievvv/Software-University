//Task: Write a function that takes three number arguments as input and finds the largest of them. Print the following text on the console: `The largest number is {number}.`.

//Solution:

function largestNum(firstNum, secondNum, thirdNum) {
  //shortest way:
  console.log(
    `The largest number is ${Math.max(firstNum, secondNum, thirdNum)}.`
  );

  //second way:
  let result = Math.max(firstNum, secondNum, thirdNum);
  console.log(`The largest number is${result}.`);
}
largestNum(5, -3, 16);
