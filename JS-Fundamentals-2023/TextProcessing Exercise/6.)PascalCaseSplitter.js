//Task: You will receive a single string.

// This string is written in PascalCase format. Your task here is to split this string by every word in it.

// Print them joined by comma and space.

//Solution:

function unclePascal(str) {
    str = str.split('');

    let wordsCounter = [];

    str.forEach(i => {
        if (i.charCodeAt(0) >= 65 && i.charCodeAt(0) <= 90) {
            wordsCounter.push(i);
        } else if (i.charCodeAt(0) >= 97 && i.charCodeAt(0) <= 122) {
            wordsCounter[wordsCounter.length - 1] += i;
        }
    });
    console.log(wordsCounter.join(', '));
}
unclePascal("SplitMeIfYouCanHaHaYouCantOrYouCan");


//secondway:

function pascalCaseSplitter(str) {
    let splitString = str.split(/(?=[A-Z])/);
    console.log(splitString.join(', '));
  }
