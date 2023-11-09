//Task: The input will be a single string.

// Find all special words starting with #. If the found special word does not consist only of letters, then it is invalid and should not be printed.

// Finally, print out all the special words you found without the label (#) on a new line.

//Solution:

function modernTimes(str) {
  let modified = [];
  let result = [];

  let splittedString = str.split(" ");

  for (let word of splittedString) {
    if (word.includes("#") && word.length > 1) {
      modified.push(word.substring(1));
    }
  }
  for (let el of modified) {
    let currWord = el.split("");
    let currWordLength = currWord.length;
    let valid = true;

    for (let i = 0; i < currWordLength; i++) {
      let code = currWord[i].charCodeAt(0);

      if ((code < 97 || code > 122) && (code < 65 || code > 90)) {
        valid = false;
      }
    }
    if (valid) {
      result.push(el);
    }
  }
  result.forEach(element => console.log(element));
}
modernTimes("Nowadays everyone uses # to tag a #special word in #socialMedia");
