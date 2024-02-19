//Task:Write a function that receives a string and a repeat count n. The function should return a new string (the old one repeated n times).

//Solution:

function repeatString(str, count) {
  let newStr = "";
  for (let i = 0; i < count; i++) {
    newStr += str;
  }
  return newStr;
}
console.log(repeatString("abc", 3));
