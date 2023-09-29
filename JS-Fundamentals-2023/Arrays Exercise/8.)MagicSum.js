//Task: Write a function, which prints all unique pairs in an array of integers whose sum is equal to a given number.

//Solution:
function magicSum(arr, magic) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let k = i + 1; k < arr.length; k++) {
      if (Number(arr[i]) + Number(arr[k]) === Number(magic)) {
        console.log(arr[i] + ` ` + arr[k]);
      }
    }
  }
}

magicSum([1, 7, 6, 2, 19, 23], 8);
