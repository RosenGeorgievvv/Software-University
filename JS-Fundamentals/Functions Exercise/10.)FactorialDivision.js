//Task: Write a function that receives two integer numbers. Calculate the factorial of each number. Divide the first result by the second and print the division formatted to the second decimal point.

//Solution:

function factorialDivision(num1, num2) {
  let factorial1 = calcFactorial(num1);
  let factorial2 = calcFactorial(num2);

  let result = factorial1 / factorial2;
  console.log(result.toFixed(2));

  function calcFactorial(num) {
    let factorial = 1;

    while (num > 1) {
      factorial *= num;
      num--;
    }
    return factorial;
  }
}
factorialDivision(5, 2);
