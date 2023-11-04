function solve(input) {

  let addressBook = {};

  for(let item of input){
    let [name, address] = item.split(':');

    addressBook[name] = address;
  }
 
  let arr = Object.entries(addressBook);
  arr.sort((a, b) => a[0].localeCompare(b[0]));

  let book = {};

  for(let [name, address] of arr){
    book[name] = address;
  }
  for(let key in book){
    console.log(`${key} -> ${book[key]} `);
  }
  

}
solve([
  "Tim:Doe Crossing",

  "Bill:Nelson Place",

  "Peter:Carlyle Ave",

  "Bill:Ornery Rd",
]);
