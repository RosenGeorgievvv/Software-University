//Task: Write a function that calculates and print the value of a number raised to a given power:

//Solution:

function mathPower(number, power) {
  let start = 1;

  for (let i = 0; i < power; i++) {
    start *= number;
  }
  console.log(start);
  
}
mathPower(2, 8);
