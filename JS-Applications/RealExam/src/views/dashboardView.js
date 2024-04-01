import { getAllCyberpunks } from "../data/data.js";
import {html, render} from '../lib.js';

const dashboardTemplate = (data) => html`
<h3 class="heading">Market</h3>
${data.length ? dashboardDataTemplate(data) : html`<h3 class="empty">No Items Yet</h3>`}`


const dashboardDataTemplate = (data) => html`
<section id="dashboard">
  ${data.map(item => cyberTemplate(item))}
</section>
`

const cyberTemplate = (data) => html`
<div class="item">
    <img src="../../${data.imageUrl}" alt="example1" />
    <h3 class="model">${data.item}</h3>
    <div class="item-info">
      <p class="price">Price: ${data.price}</p>
      <p class="availability">${data.availability}</p>
      <p class="type">Type: ${data.type}</p>
    </div>
    <a class="details-btn" href="/details/${data._id}">Uncover More</a>
  </div>
`

export async function showDashboardView(){
    const data = await getAllCyberpunks();
    render(dashboardTemplate(data));
}