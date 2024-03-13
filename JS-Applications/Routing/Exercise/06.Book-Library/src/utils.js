import { render } from "../node_modules/lit-html/lit-html.js";
import { bookRowTemplate } from "./components/book.js";
import { editFormTemplate } from "./components/editForm.js";
import { getBookById, getBooks, updateBook } from "./data/data.js";

export async function loadAllBooks() {

    const books = await getBooks();

    render(Object.values(books).map(book => bookRowTemplate(book)), document.querySelector('tbody'));
}

export async function onEdit(event) {
    const button = event.target;
    const tr = button.parentElement.parentElement;
    const id = tr.dataset.id;

    const addForm = document.getElementById('add-form');
    if (addForm) {
        addForm.remove();
    }

    const book = await getBookById(id);
    render(editFormTemplate(book), document.getElementById('form-section'))
}

export async function setBookIds() {
    const books = await getBooks();
    for (let bookId in books) {
        const id = bookId;
        const book = books[id];

        await updateBook(id, book.author, book.title, id)
        books[bookId]._id = id;
    }
}