//Task: Write a function that returns an array of Person objects. Use the class from the previous task, create the following instances, and return them in an array.

//Solution:

function getPersonInfo(){
    class Person{

        firstName;
        lastName;
        age;
        email;
    
        constructor(firstName, lastName, age, email){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
        toString(){
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        }
    }

    return [
        new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'),
        new Person('SoftUni'),
        new Person('Stephan', 'Johnson', 25),
        new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com')
    ];
}
console.log(getPersonInfo)