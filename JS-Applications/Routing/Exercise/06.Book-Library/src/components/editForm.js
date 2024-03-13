import { html } from "../../node_modules/lit-html/lit-html.js";
import { edit } from "../views/edit.js";

export const editFormTemplate = (book) => html`
<form id="edit-form" @submit=${edit.bind(null, book._id)}>
    <input type="hidden" name="id">
    <h3>Edit book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title..." value=${book.title}>
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author..." value=${book.author}>
    <input type="submit" value="Save">
</form>
`;