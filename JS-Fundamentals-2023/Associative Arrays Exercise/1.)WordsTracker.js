//Task: Write a function that receives an array of words and finds occurrences of given words in that sentence.

// The input will come as an array of strings. The first string will contain the words you will be looking for separated by a space. All strings after that will be the words in which you will check for a match.

// Print for each word how many times it occurs. The words should be sorted by count in descending.

//Solution:

function wordsTracker(arr) {

 let searchedWords = arr.shift().split(' ');
 let occurrences = {};

 for(let word of searchedWords){
    occurrences[word] = 0;
 }
for(let word of arr){
    if(word in occurrences){
        occurrences[word]++;
    }
}
let entries = Object.entries(occurrences).sort((a, b) => b[1] - a[1]);

for(let [word, repeats] of entries){
    console.log(`${word} - ${repeats}`);
}
}
wordsTracker([
  "this sentence",

  "In",
  "this",
  "sentence",
  "you",
  "have",

  "to",
  "count",
  "the",
  "occurrences",
  "of",

  "the",
  "words",
  "this",
  "and",
  "sentence",

  "because",
  "this",
  "is",
  "your",
  "task",
]);
