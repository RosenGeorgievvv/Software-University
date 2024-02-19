//Task: Write a function that prints whether a given character is upper-case or lower-case.

//Solution:

function lowerToUpper(str) {
  if (str === str.toUpperCase()) {
    console.log("upper-case");
  }else{
    console.log("lower-case");
  }
}
lowerToUpper("L");
