//Task: The input will be given as two separated strings (a word as a first parameter and a text as a second).

// Write a function that checks given text for containing a given word. The comparison should be case insensitive. Once you find a match, print the word and stop the program.

// If you don't find the word print: "{word} not found!"

//Solution:

function strSubstring(word, text) {
  let convertWord = word.toLowerCase();
  let convertText = text.toLowerCase();

  let splitted = convertText.split(" ");

  if (splitted.includes(convertWord)) {
    console.log(convertWord);
  } else {
    console.log(`${convertWord} not found!`);
  }
}
strSubstring("javascript", "JavaScript is the best programming language");
