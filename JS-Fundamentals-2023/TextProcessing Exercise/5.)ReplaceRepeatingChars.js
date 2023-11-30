//Task: Write a function that receives a single string and replace any sequence of the same letters with a single corresponding letter.

//Solution:

function replacement(str) {
  let output = "";

  for (let char of str) {
    char !== output[output.length - 1] ? (output += char) : "";
  }
  console.log(output);
}
replacement("aaaaabbbbbcdddeeeedssaa");
