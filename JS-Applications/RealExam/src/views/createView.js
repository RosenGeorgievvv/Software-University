import { createCyberpunk } from "../data/data.js";
import {html, render, page} from '../lib.js';
import { createSubmitHandler } from "../util.js";

const createTemplate = (hand) => html`
<section id="create">
          <div class="form form-item">
            <h2>Share Your item</h2>
            <form @submit=${hand} class="create-form">
              <input type="text" name="item" id="item" placeholder="Item" />
              <input type="text" name="imageUrl" id="item-image" placeholder="Your item Image URL" />
              <input type="text" name="price" id="price" placeholder="Price in Euro" />
              <input type="text" name="availability" id="availability" placeholder="Availability Information" />
              <input type="text" name="type" id="type" placeholder="Item Type" />
              <textarea id="description" name="description" placeholder="More About The Item" rows="10" cols="50"></textarea>
              <button type="submit">Add</button>
            </form>
          </div>
        </section>
`;

export function showCreateView(){
    const hand = createSubmitHandler(onSubmit);
    render(createTemplate(hand));
}

async function onSubmit(data, form){
    const {item, imageUrl, price, availability, type, description} = data;

    if(!item || !imageUrl || !price || !availability || !type || !description){
        return alert('All fields must be fulfilled!');
    }
    await createCyberpunk(data);
    page.redirect('/dashboard');
}