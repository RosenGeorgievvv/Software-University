//Task: The input will be a single string.

// Find all special words starting with #. If the found special word does not consist only of letters, then it is invalid and should not be printed.

// Finally, print out all the special words you found without the label (#) on a new line.

//Solution:

function modernTimes(str) {
  let splittedString = str.split(" ");

  for (let word of splittedString) {
    if (word.includes("#") && word.length > 1) {
        console.log(word.substring(1));
    }
  }
}
modernTimes("Nowadays everyone uses # to tag a #special word in #socialMedia");
