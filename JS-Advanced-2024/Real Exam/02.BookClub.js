class BookClub {
    constructor(library) {
        this.library = library;
        this.books = [];
        this.members = [];
    }

    addBook(title, author) {
        let alreadyBook = this.books.find(book => book.title === title && book.author === author);
        if (alreadyBook) {
            return `The book "${title}" by ${author} is already in ${this.library} library.`;
        } else {
            this.books.push({ title, author });
            return `The book "${title}" by ${author} has been added to ${this.library} library.`;
        }
    }

    

    
    addMember(name) {
        if (this.members.includes(name)) {
            return `Member ${name} is already a part of the book club.`;
        } else {
            this.members.push(name);
            return `Member ${name} has been joined to the book club.`;
        }
    }

    assignBookToMember(name, bookTitle) {
        let nameIndex = this.members.indexOf(name);
        if (nameIndex === -1) {
            throw new Error(`Member ${name} not found.`);
        }

        let bookIndex = this.books.findIndex(book => book.title === bookTitle);
        if (bookIndex === -1) {
            throw new Error(`Book "${bookTitle}" not found.`);
        }

        let pushedBook = this.books[bookIndex];
        this.books.splice(bookIndex, 1);
        return `Member ${name} has been assigned the book "${pushedBook.title}" by ${pushedBook.author}.`;
    }

    generateReadingReport() {
        if (this.members.length === 0) {
            return 'No members in the book club.';
        }

        if (this.books.length === 0) {
            return `No available books in the ${this.library} library.`;
        }

        let generateReport = `Available Books in ${this.library} library:\n`;
        this.books.forEach(book => {
            generateReport += `"${book.title}" by ${book.author}\n`;
        });
        return generateReport.trim();
    }
}

module.exports = BookClub;





const myBookClub = new BookClub('The Bookaholics');
console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("1984", "George Orwell"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.addMember("Peter"));
console.log(myBookClub.assignBookToMember("Mary", "The Great Gatsby"));
