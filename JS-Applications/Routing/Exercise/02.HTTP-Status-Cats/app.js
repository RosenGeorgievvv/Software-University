import { html, render } from "https://esm.run/lit-html@1";
import { cats } from "./catSeeder.js";
console.log(cats);

const allCatsFied = document.getElementById('allCats');

const template = (cats) => html`
  <ul>
    ${cats.map(cat => html`
    <li>
      <img
        src="./images/${cat.imageLocation}"
        width="250"
        height="250"
        alt="Card image cap"
      />
      <div class="info">
        <button class="showBtn" @click=${toggleStatus}>Show status code</button>
        <div class="status" style="display: none" id="100">
          <h4>Status Code: ${cat.statusCode}</h4>
          <p>${cat.statusMessage}</p>
        </div>
      </div>
    </li>
    `)}
  </ul>
`;

function toggleStatus(e){
    e.preventDefault();


}
render(template(cats), allCatsFied)

