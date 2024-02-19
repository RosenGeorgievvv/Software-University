//Task:You're tasked to create a list of employees and their personal numbers.

// You will receive an array of strings. Each string is an employee name and to assign them a personal number you have to find the length of the name (whitespace included).

// Try to use an object.

// At the end print all the list employees in the following format:

// "Name: {employeeName} -- Personal Number: {personalNum}"

//Solution:

function employeesTask(arr) {
  class Person {
    constructor(name, id) {
      this.name = name;
      this.id = id;
    }
    printInfo() {
      console.log(`Name: ${this.name} -- Personal Number: ${this.id}`);
    }
  }

  let personDetails = [];

  for (let i = 0; i < arr.length; i++) {
    let name = arr[i];
    let id = name.length;
    let currentPerson = new Person(name, id);
    personDetails.push(currentPerson);
  }
  personDetails.forEach((i) => i.printInfo());
}
employeesTask([
  "Silas Butler",

  "Adnaan Buckley",

  "Juan Peterson",

  "Brendan Villarreal",
]);
