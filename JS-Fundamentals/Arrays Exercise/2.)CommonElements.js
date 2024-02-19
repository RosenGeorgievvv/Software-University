//Task: Write a function, which prints common elements in two string arrays. Print all matches on separate lines. Compare the first array with the second array.

//Solution:

function commonElements(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let k = 0; k < arr2.length; k++) {
      if (arr1[i] === arr2[k]) {
        newArr.push(arr1[i]);
      }
    }
  }
  console.log(newArr.join("\n"));
}
commonElements(
  ["Hey", "hello", 2, 4, "Peter", "e"],

  ["Petar", 10, "hey", 4, "hello", "2"]
);
