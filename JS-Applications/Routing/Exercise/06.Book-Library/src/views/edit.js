import { render } from "../../node_modules/lit-html/lit-html.js";
import { layoutTemplate } from "../components/layout.js";
import { updateBook } from "../data/data.js";
import { loadAllBooks } from "../utils.js";

export async function edit(id, event) {
    event.preventDefault();

    const form = event.target;

    const { title, author } = Object.fromEntries((new FormData(form)).entries());
    console.log(title, author);

    const book = await updateBook(id, author, title);

    form.reset();
    // form.remove();
    debugger
    render(layoutTemplate(), document.querySelector('body'));

    await loadAllBooks();
} 