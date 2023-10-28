//Task: Write a function that stores information about a person’s name and phone number. The input is an array of strings with space-separated name and number. Replace duplicate names.

//Solution:

function assocArr(arr) {

    let phonebookList = {};

    for(let line of arr){
        let tokens = line.split(' ');
        let name = tokens[0];
        let number = tokens[1];
        phonebookList[name] = number;
    }
    for(let key in phonebookList){
        console.log(`${key} -> ${phonebookList[key]}`);
    }
}
assocArr([
  "Tim 0834212554",

  "Peter 0877547887",

  "Bill 0896543112",

  "Tim 0876566344",
]);
