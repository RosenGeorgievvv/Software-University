import { html } from "../../node_modules/lit-html/lit-html.js";
import { onEdit } from "../utils.js";
import { onDelete } from "../views/delete.js";

export const bookRowTemplate = (book) => html`
<tr data-id=${book._id}>
   <td>${book.title}</td>
   <td>${book.author}</td>
   <td>
       <button @click=${onEdit}>Edit</button>
       <button @click=${onDelete}>Delete</button>
   </td>
</tr>
`;