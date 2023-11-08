//Task: Write a function that receives a text and a single word that you need to search. Print the number of all occurrences of this word in the text.

//Solution:

// function countStrOccurrences(str, search) {
//   let words = str.split(" ");
//   let counter = 0;

//   for (let special of words) {
//     if (special == search) {
//       counter++;
//     }
//   }
//   console.log(counter);
// }
// countStrOccurrences(
//   "This is a word and it also is a sentence",

//   "is"
// );
 
//second way:

// function countString(str, search){

//     let words = str.split(' ');

//     let match = words.filter(word => word === search);
//     console.log(match.length);
// }
// countString(
//     "This is a word and it also is a sentence",
  
//     "is"
//   );

  //third way (shortest):

