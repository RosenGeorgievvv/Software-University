function solve(input) {

  let myMap = new Map();

  for(let items of input){
    let [item, quantity] = items.split(' ');

    if(myMap.has(item)){
      myMap.set(item, myMap.get(item) + parseInt(quantity, 10));
    }else{
      myMap.set(item, parseInt(quantity, 10));
    }
  }
  for(let [item, quantity] of myMap){
    console.log(`${item} -> ${quantity}`);
  }
}
solve(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
