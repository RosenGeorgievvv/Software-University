//Task: You will be given an array of integer numbers on the first line of the input.

// Remove all repeating elements from the array.

// Print the result elements separated by a single space.

//Solution:

function disArr(arr) {
  let finalArr = [];

  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];

    if (finalArr.indexOf(currentElement) === -1) {
      finalArr.push(currentElement);
    }
  }
  console.log(finalArr.join(" "));
}
disArr([1, 2, 3, 4]);
disArr([7, 8, 9, 7, 2, 3, 4, 1, 2]);
disArr([20, 8, 12, 13, 4, 4, 8, 5]);

//short way with methods:
function distinctArray(arr) {
  let uniqueElements = arr
    .filter((value, index, myArr) => myArr.indexOf(value) === index)
    .join(" ");
  console.log(uniqueElements);
}
distinctArray([1, 2, 3, 4]);
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);

//thirdway:

function distinctArray(arr) {
  let uniqueNums = [];

  for (let num of arr) {
    if (!uniqueNums.includes(num)) uniqueNums.push(num);
  }

  console.log(uniqueNums.join(" "));
}
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);
