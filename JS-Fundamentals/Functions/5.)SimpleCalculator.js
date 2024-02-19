//Task:Write a function that receives three parameters – two numbers and an operator (string) – and calculates the result depending on the operator. Operator can be 'multiply', 'divide', 'add' or 'subtract'. Try to solve this task using arrow functions.

// Bonus

// Solve this task without using any conditional statements (no if or switch statements or ternary operators).

// Input

// The input comes as parameters named numOne, numTwo, operator.

//Solution:

function calc(a, b, operator) {
  switch (operator) {
    case "multiply":
      let multiply = (a, b) => a * b;
      console.log(multiply(a, b));
      break;
    case "divide":
      let divide = (a, b) => a / b;
      console.log(divide(a, b));
      break;
    case "add":
      let add = (a, b) => a + b;
      console.log(add(a, b));
      break;
    case "subtract":
      let subtract = (a, b) => a - b;
      console.log(subtract(a, b));
      break;
    default:
      return;
  }
}
calc(5, 5, "multiply");
