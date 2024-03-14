import { postBook } from "../data/data.js";
import { loadAllBooks } from "../utils.js";

export async function createBook(event) {
    event.preventDefault();

    const form = event.target;
    const { title, author } = Object.fromEntries((new FormData(form)).entries());

    await postBook(author, title);
    await loadAllBooks();
}