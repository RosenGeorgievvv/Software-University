//Task: Write a function that sorts an array of numbers so that the first element is the biggest one, the second is the smallest one, the third is the second biggest one, and the fourth is the second smallest one, and so on.

// Print the elements on one row, separated by a single space.

//Solution:

function sortingArr(arr) {
  arr.sort((a, b) => b - a);
  let arrLength = arr.length;
  let result = [];

  for (let i = 0; i < Math.ceil(arrLength / 2); i++) {
    result.push(arr[i]);
    if (i !== arrLength - 1 - i) {
      result.push(arr[arrLength - 1 - i]);
    }
  }
  console.log(result.join(" "));
}
sortingArr([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
