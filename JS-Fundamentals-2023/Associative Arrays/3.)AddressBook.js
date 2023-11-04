//Task:Write a function that stores information about a person’s name and his address. The input comes as an array of strings. Each string contains the name and the address separated by a colon. If you receive the same name twice just replace the address. In the end, print the full list, sorted alphabetically by the person’s name.

//Solution:

// function addressBook(arr) {
//   let book = {};

//   for (let item of arr) {
//     let [name, address] = item.split(":");

//     book[name] = address;
//   }
//   let entries = Object.entries(book);
//   entries.sort((a, b) => a[0].localeCompare(b[0]));

//   let sorted = {};
//   for (let [name, address] of entries) {
//     sorted[name] = address;
//   }
//   for (let [name, address] of Object.entries(sorted)) {
//     console.log(name, "->", address);
//   }
// }
// addressBook([
//   "Tim:Doe Crossing",

//   "Bill:Nelson Place",

//   "Peter:Carlyle Ave",

//   "Bill:Ornery Rd",
// ]);

//second way:

function addressBook(arr) {
  let book = {};

  for (let item of arr) {
    let [name, address] = item.split(":");

    book[name] = address;
  }
  let entries = Object.entries(book);
  entries.sort((a, b) => a[0].localeCompare(b[0]));

  let sorted = Object.fromEntries(entries);

  for (let [name, address] of Object.entries(sorted)) {
    console.log(name, "->", address);
  }
}
addressBook([
  "Tim:Doe Crossing",

  "Bill:Nelson Place",

  "Peter:Carlyle Ave",

  "Bill:Ornery Rd",
]);
