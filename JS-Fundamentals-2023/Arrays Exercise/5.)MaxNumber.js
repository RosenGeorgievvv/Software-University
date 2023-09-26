//Task: Write a function to find all the top integers in an array. A top integer is an integer, which is bigger than all the elements to its right.

// Output

// Print all top integers on the console, separated by a single space.

//Solution:

function maxNumber(arr) {
  let topInt = [];

  for (let i = 0; i < arr.length; i++) {
    let isTopInt = true;

    for (let k = i + 1; k < arr.length; k++) {
      if (arr[i] <= arr[k]) {
        isTopInt = false;
        break;
      }
    }
    if (isTopInt) {
      topInt.push(arr[i]);
    }
  }
  console.log(topInt.join(' '))
}
maxNumber([1, 4, 3, 2]);
