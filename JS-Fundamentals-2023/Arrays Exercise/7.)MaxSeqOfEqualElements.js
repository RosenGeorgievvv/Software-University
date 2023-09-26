//Task: Write a function that finds the longest sequence of equal elements in an array of numbers.

// If several longest sequences exist, print the leftmost one.

//Solution:

function maxSeq(arr) {
  let maxLength = 0;
  let currLength = 1;
  let longestSeq = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      currLength++;
    } else {
      currLength = 1;
    }

    if (currLength > maxLength) {
      maxLength = currLength;
      longestSeq = i - maxLength + 1;
    }
  }
  console.log(arr.slice(longestSeq, longestSeq + maxLength).join(" "));
}
maxSeq([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
