//Task: Write a function that receives 3 parameters, sets them to an object, and returns that object.

// The input comes as 3 separate strings in the following order: firstName, lastName, age.

//Solution:

function personInfo(firstName, lastName, age) {

    let person = {};

    person.firstName = firstName;
    person.lastName = lastName;
    person.age = age;

    
    return person;
}
console.log(personInfo("Peter", "Pan", "20"));
