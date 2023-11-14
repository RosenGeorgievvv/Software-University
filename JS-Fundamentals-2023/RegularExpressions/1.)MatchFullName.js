//Task: Write a JavaScript function to match full names from a list of names and print them on the console.

//Solution:

function matchFullName(input) {
  let regexp = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g;
  let validNames = [];
  let validName = null;

  while ((validName = regexp.exec(input)) !== null) {
    validNames.push(validName[0]);
  }
  console.log(validNames.join(" "));
}
matchFullName("Ivan Ivanov");


//secondway:

// function matchFullName(text) {
//     let regEx = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
//     let matches = text.match(regEx);

//     for (let name of matches) {
//         console.log(name);
//     }
// }
