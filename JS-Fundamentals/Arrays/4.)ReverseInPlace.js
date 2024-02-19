//Task: Write a program, which receives an array of strings. Your task is to reverse the array without creating a new array. Print the resulting elements on a single line, space-separated

//Solution:

function reverseInPlace(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let firstElement = arr[i];
    let index = arr.length - 1 - i;
    arr[i] = arr[index];
    arr[index] = firstElement;
  }
  console.log(arr.join(" "));
}
reverseInPlace(["a", "b", "c", "d", "e"]);
