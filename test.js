function solve(word, text) {
  text = text.toLowerCase().split(" ");
  word = word.toLowerCase();

  if (text.includes(word)) {
    console.log(`${word}`);
  } else {
    console.log(`${word} not found!`);
  }
}
solve(
  "javascript",

  "JavaScript is the best programming language"
);
