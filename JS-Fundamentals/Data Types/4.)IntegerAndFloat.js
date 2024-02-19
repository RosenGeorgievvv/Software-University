//Task: You will receive 3 numbers. Your task is to find their sum and print result to the console in the following format: `{sum} - {type of the number (Integer or Float)}`

//Solution:

function intAndFloat(firstNum, secondNum, thirdNum) {
  let sum = firstNum + secondNum + thirdNum;

  let output = sum % 1 === 0 ? (sum += " - Integer") : (sum += " - Float");
  console.log(output);
}
intAndFloat(9, 100, 1.1);
