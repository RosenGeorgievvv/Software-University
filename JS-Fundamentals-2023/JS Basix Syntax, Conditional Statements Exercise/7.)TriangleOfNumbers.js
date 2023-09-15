//Task: Write a function, which receives a single number – n, and prints a triangle from 1 to n as in the examples.

//Solution:

function triangle(num) {
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += i + " ";
    }
    console.log(row);
  }
}
triangle(3);
