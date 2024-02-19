//Task: You are given two integers n and k. Write a function that generates and prints the following sequence:

// · The first element is 1.

// · Every following element equals the sum of the previous k elements.

// · The length of the sequence is n elements.

// The input comes as two number arguments. The first element represents the number n, and the second – the number k.

// The output is printed on the console on a single line, separated by space.

//Solution:

function kSequence(n, k) {
  let seq = [1];
  for (let i = 1; i < n; i++) {
    let start = Math.max(0, i - k);
    let end = i - 1;
    let sum = 0;

    for (let j = start; j <= end; j++) {
      sum += seq[j];
    }
    seq[i] = sum;
    ("");
  }
  console.log(seq.join(" "));
}
kSequence(6, 3);
