//Task: Write a function that keeps track of guests that are going to a house party.

// You will be given an array of strings. Each string will be one of the following:

// - "{name} is going!"

// - "{name} is not going!"

// If you receive the first type of input, you have to add the person if he/she is not in the list (If he/she is in the list print: "{name} is already in the list!").

// If you receive the second type of input, you have to remove the person if he/she is in the list (if not print: "{name} is not in the list!").

// At the end print all the guests each on a separate line.

//Solution:

function houseParty(arr) {
  let list = [];
  let guestName = " ";

  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i].split(" ");
    let currName = curr[0];
    let command = curr[2];

    if(command != "not"){
        if(list.includes(currName) === true){
            console.log(`${currName} is already in the list!`);
            continue;
        }
        list.push(currName)
    }else{
        if(list.includes(currName) === false){
            console.log(`${currName} is not in the list! `);
            continue;
        }
        list = list.filter(x => x != currName);
    }
  }
  console.log(list.join('\n'));
}
houseParty([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]);
