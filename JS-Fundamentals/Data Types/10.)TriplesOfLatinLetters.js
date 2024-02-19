//Task: Write a program that receives a string of number n and print all triples of the first n small Latin letters, ordered alphabetically

//Solution:

function triples(str) {
  for (let i = 0; i < str; i++) {
    let firstLetter = String.fromCharCode(i + 97);
    for (let j = 0; j < str; j++) {
      let secondLetter = String.fromCharCode(j + 97);
      for (let k = 0; k < str; k++) {
        let thirdLetter = String.fromCharCode(k + 97);
        console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
      }
    }
  }
}
triples("3");
