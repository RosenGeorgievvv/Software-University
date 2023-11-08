//Task: Write a function, which receives two parameters.

// The first parameter will be a string with some words separated by ', '.

// The second parameter will be a string that contains templates containing '*'.

// Find the word with the same length as the template and replace it.

//Solution:

function revealWords(str, template) {

let word = str.split(', ');
let result = template.split(' ').map(t => {
    if(t.includes('*')){
        let a = t.length;
        let matching = word.find(w => w.length === a);
        return matching ? matching : t;
    }
    return t;
});
console.log(result.join(' '));
}
revealWords(
  "great", "softuni is ***** place for learning new programming languages");
