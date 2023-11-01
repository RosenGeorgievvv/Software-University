//Task: Write a function that takes a certain number of items and their quantity. If the same item appears more than once, add the new amount to the existing one. In the end, print all the items and their amount without sorting them. The input comes as an array of strings. Try using a Map().

//Solution:

function storage(arr) {
  let myMap = new Map();

  for (let items of arr) {
    let [item, quantity] = items.split(" ");

    if (myMap.has(item)) {
      myMap.set(item, myMap.get(item) + parseInt(quantity, 10));
    } else {
      myMap.set(item, parseInt(quantity, 10));
    }
  }
  
  for (let [item, quantity] of myMap) {
    console.log(`${item} -> ${quantity}`);
  }
}
storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
