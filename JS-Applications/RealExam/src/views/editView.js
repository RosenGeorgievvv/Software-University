import { getCyberpunkById, updateCyberpunk } from "../data/data.js";
import {html, render} from '../lib.js';
import { createSubmitHandler } from "../util.js";
import { page } from '../lib.js';

const editTemplate = (data, hand) => html`
<section id="edit">
          <div class="form form-item">
            <h2>Edit Your Item</h2>
            <form @submit=${hand} class="edit-form" data-id=${data._id}>
              <input type="text" name="item" id="item" placeholder="Item" value=${data.item} />
              <input type="text" name="imageUrl" id="item-image" placeholder="Your item Image URL" value=${data.imageUrl} />
              <input type="text" name="price" id="price" placeholder="Price in Euro" value=${data.price} />
              <input type="text" name="availability" id="availability" placeholder="Availability Information" value=${data.availability} />
              <input type="text" name="type" id="type" placeholder="Item Type" value=${data.type} />
              <textarea id="description" name="description" placeholder="More About The Item" rows="10" cols="50" >${data.description}</textarea>
              <button type="submit">Edit</button>
            </form>
          </div>
        </section>
`;

export async function showEditView(ctx){
    const id = ctx.params.id;
    const hand = createSubmitHandler(onSubmit);
    const data = await getCyberpunkById(id);
    render(editTemplate(data, hand));
}

async function onSubmit(data, form){
    const id = form.dataset.id;
    const {item, imageUrl, price, availability, type, description} = data;
    if(!item || !imageUrl || !price || !availability || !type || !description){
       return alert('All fields must be fulfilled!'); 
    }
    await updateCyberpunk(id, data);
    page.redirect(`/details/${id}`);
}