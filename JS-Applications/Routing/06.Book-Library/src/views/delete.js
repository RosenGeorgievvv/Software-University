import { deleteBook } from "../data/data.js";

export async function onDelete(e) {
    const id = e.target.parentElement.parentElement.dataset.id;
    await deleteBook(id);
    document.querySelector(`[data-id="${id}"]`).remove();
}