//Task: Write a function that determines if there exists an element in the array of numbers such that the sum of the elements on its left is equal to the sum of the elements on its right.

// If there are NO elements to the left/right, their sum is 0.

// Print the index that satisfies the required condition or "no" if there is no such index.

//Solution:

function equalSums(arr) {
  for (let i = 0; i < arr.length; i++) {
    let leftSum = arr.slice(0, i).reduce((acc, val) => acc + val, 0);
    let rightSum = arr.slice(i + 1).reduce((acc, val) => acc + val, 0);

    if (leftSum === rightSum) {
      return i;
    }
  }
  return "no";
}
console.log(equalSums([1, 2, 3, 3]));
