//Task:  Write a function that counts the times each word occurs in a text. Print the words sorted by count in descending order. The input comes as an array of strings.

//Solution:

function wordOccurrences(arr) {
  let map = new Map();
  let words = 0;
  for (let word of arr) {
    if (!map.has(word)) {
      words = 1;
    } else {
      words = map.get(word) + 1;
    }
    map.set(word, words);
  }
  let sorted = Array.from(map);
  sorted.sort((a, b) => b[1] - a[1]);

  for (let [word, words] of sorted) {
    console.log(`${word} -> ${words} times`);
  }
}
wordOccurrences([
  "Here",
  "is",
  "the",
  "first",
  "sentence",

  "Here",
  "is",
  "another",
  "sentence",
  "And",

  "finally",
  "the",
  "third",
  "sentence",
]);
