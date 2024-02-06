//Task: Implement a class List, which keeps a list of numbers, sorted in ascending order. It must support the following functionality:

// · add(element) - adds a new element to the collection

// · remove(index) - removes the element at position index

// · get(index) - returns the value of the element at position index

// · size - number of elements stored in the collection

// The correct order of the elements must be kept at all times, regardless of which operation is called. Removing and retrieving elements shouldn’t work if the provided index points outside the length of the collection (either throw an error or do nothing). Note the size of the collection is not a function.


//Solution: 

class List {
    constructor() {
        this.elements = [];
        this.size = 0
    }
 
 
    add(num) {
        this.elements.push(num)
        this.size++;
        return this.elements.sort((a, b) => a - b);
    }
 
    remove(index) {
        if (index >= 0 && index < this.elements.length) {
            this.elements = this.elements.filter((x, y) => y !== index)
            this.size--;
        } else {
            throw new Error('Index otside boundary');
        }
 
        return this.elements.sort((a, b) => a - b);
    }
 
    get(index) {
        if (index >= 0 && index < this.elements.length) {
            return this.elements[index];
        } else {
            throw new Error('Index otside boundary');
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));