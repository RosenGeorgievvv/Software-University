//Task: The SoftUni Spelling Bee competition is here. But it`s not like any other Spelling Bee competition out there. It`s different and a lot more fun! You, of course, are a participant, and you are eager to show the competition that you are the best, so go ahead, learn the rules and win!

// On the first line of the input, you will be given a text string. To win the competition, you have to find all hidden word pairs, read them, and mark the ones that are mirror images of each other.

// First of all, you have to extract the hidden word pairs. Hidden word pairs are:

// · Surrounded by "@" or "#" (only one of the two) in the following pattern #wordOne##wordTwo# or @wordOne@@wordTwo@

// · At least 3 characters long each (without the surrounding symbols)

// · Made up of letters only

// If the second word, spelled backward, is the same as the first word and vice versa (casing matters!), they are a match, and you have to store them somewhere. Examples of mirror words:

// #Part##traP# @leveL@@Level@ #sAw##wAs#

// · If you don`t find any valid pairs, print: "No word pairs found!"

// · If you find valid pairs print their count: "{valid pairs count} word pairs found!"

// · If there are no mirror words, print: "No mirror words!"

// · If there are mirror words print:

// "The mirror words are:

// {wordOne} <=> {wordtwo}, {wordOne} <=> {wordtwo}, … {wordOne} <=> {wordtwo}"

// Input / Constraints

// · You will recive a string.

// Output

// · Print the proper output messages in the proper cases as described in the problem description.

// · If there are pairs of mirror words, print them in the end, each pair separated by ", ".

// · Each pair of mirror word must be printed with " <=> " between the words.

//Solution:

function mirrorWords(input) {
  let text = input[0];
  let pattern = /(@|#)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;

  let validMatch;
  let validWords = [];

  while ((validMatch = pattern.exec(text))) {
    validWords.push(validMatch);
  }

  if (validWords.length === 0) {
    console.log("No word pairs found!");
  } else {
    console.log(`${validWords.length} word pairs found!`);
  }

  let wordPairs = [];

  for (let pair of validWords) {
    let firstWord = pair[2];
    let secondWord = pair[3];
    let wordToBeReversed = pair[3].split("").reverse().join("");
    let newArr = [];

    if (firstWord === wordToBeReversed) {
      newArr.push(firstWord, secondWord);
      wordPairs.push(newArr);
    }
    newArr = [];
  }
  if (wordPairs.length === 0) {
    console.log("No mirror words!");
  } else {
    let arrOfWords = [];

    for (let pair of wordPairs) {
      let firstWord = pair[0];
      let secondWord = pair[1];
      let newArr = [];

      newArr.push(firstWord, secondWord);
      let finalArr = newArr.join(" <=> ");
      arrOfWords.push(finalArr);
    }
    console.log("The mirror words are:");

    console.log(arrOfWords.join(", "));
  }
}
mirrorWords([
  "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);
