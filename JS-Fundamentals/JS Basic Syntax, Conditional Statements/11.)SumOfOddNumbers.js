//Task:
// Write a program that prints the next n odd numbers (starting from 1) and on the last row prints the sum of them.

// Input

// You will receive a number – n. This number shows how many odd numbers you should print.

// Output

// Print the next n odd numbers, starting from 1, separated by newlines.

// On the last line, print the sum of these numbers in the following format: `Sum: {total sum}`

// Constraints

// · n will be in the interval [1…100]

//Solution:

function sumOddNumbers(num) {
  let number = Number(num);
  let sum = 0;
  let count = 0;

  for (let i = 1; i <= 100; i += 2) {
    console.log(i);
    count++;
    sum += i;
    if(count == number){
        console.log(`Sum: ${sum}`);
        break;
    }
  }
}
sumOddNumbers("5");
