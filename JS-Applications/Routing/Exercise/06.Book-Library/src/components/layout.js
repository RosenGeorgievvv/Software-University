import { html } from "../../node_modules/lit-html/lit-html.js";
import { loadAllBooks } from "../utils.js";
import { createBook } from "../views/create.js";

export const layoutTemplate = () => html`
<button id="loadBooks" @click=${loadAllBooks}>LOAD ALL BOOKS</button>
<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
       
    </tbody>
</table>

<section id="form-section">
    <form id="add-form" @submit=${createBook}>
        <h3>Add book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Submit">
    </form>
</section>
`;