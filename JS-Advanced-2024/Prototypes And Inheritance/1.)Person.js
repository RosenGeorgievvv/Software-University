function createPerson(firstName, lsatName) {
    const person = {
        firstName: firstName,
        lastName: lsatName
    };
    Object.defineProperty(person, 'fullName', {
        get() {
            return this.firstName + ' ' + this.lastName;
        },
        set(value) {
            const tokens = value.split(' ');
            if (tokens.length === 2) {
                [this.firstName, this.lastName] = tokens;
            }

            //[person.firstName, person.lastName] = value.split(' ');
        },
        enumerable: true,
        configurable: true
    })

    return person;
}

let person = createPerson("Peter", "Ivanov");
console.log(person.fullName);
person.firstName = "George";
console.log(person.fullName); 
person.lastName = "Peterson";
console.log(person.fullName); 
person.fullName = "Nikola Tesla";
console.log(person.firstName); 
console.log(person.lastName); 