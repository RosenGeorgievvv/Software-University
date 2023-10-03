//Task: Write a function that receives two characters and prints on a single line all the characters in between them according to the ASCII code. Keep in mind that the second character code might be before the first one inside the ASCII table.

//Solution:

function charBetween(char1, char2){

    let firstChar = char1.charCodeAt(0);
    let secondChar = char2.charCodeAt(0);

    let start = Math.min(firstChar, secondChar);
    let end = Math.max(firstChar,secondChar);

    let result = '';
    for(let i = start + 1; i < end; i++){
        result+= String.fromCharCode(i) + ' ';
       
    }
    console.log(result)
}
charBetween('a',

'd')