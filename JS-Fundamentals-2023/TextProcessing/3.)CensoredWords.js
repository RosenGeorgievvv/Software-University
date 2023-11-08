//Task: Write a function that receives a text as a first parameter and a single word as a second. Find all occurrences of that word in the text and replace them with the corresponding count of '*'.

//Solution:

function censoredWords(text, word) {
  while (text.includes(word)) {
    text = text.replace(word, "*".repeat(word.length));
  }
  console.log(text);
}
censoredWords(
  "A small sentence with some words",

  "small"
);
