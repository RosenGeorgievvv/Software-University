//Task: Write a function that displays numbers from given start to given end and their sum. The input comes as two number parameters.

//Solution:

function printAndSum(arg1, arg2) {
  let firstNumber = arg1;
  let secondNumber = arg2;
  let sum = 0;
  let space = "";

  for (let i = firstNumber; i <= secondNumber; i++) {
    space += i + " ";
    sum += i;
  }
  console.log(space)
  console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);
