//Task:Write a function that receives two parameters: sequence of numbers and special bomb number with a certain power.

// Your task is to detonate every occurrence of the special bomb number and according to its power his neighbors from left and right. Detonations are performed from left to right and all detonated numbers disappear.

// The input contains two arrays of numbers. The first contains the initial sequence and the second contains the special bomb number and its power.

// The output is the sum of the remaining elements in the sequence.

//Solution:

function bombNums(seq, bomb) {
  let specialNum = bomb[0];
  let power = bomb[1];

  while (seq.includes(specialNum)) {
    let current = seq.indexOf(specialNum);
    let removedElements = power * 2 + 1;
    let startIndx = current - power;

    if (startIndx < 0) {
      removedElements += startIndx;
      startIndx = 0;
    }
    seq.splice(startIndx, removedElements);
  }
  console.log(seq.reduce((a, b) => a + b, 0));
}
bombNums([1, 4, 4, 2, 8, 9, 1], [9, 3]);
