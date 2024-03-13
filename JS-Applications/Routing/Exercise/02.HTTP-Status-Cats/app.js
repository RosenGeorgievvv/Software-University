import { html, render } from "https://esm.run/lit-html@1";
import { cats } from "./catSeeder.js";
console.log(cats);

const allCatsField = document.getElementById('allCats');

const template = (cats) => html`
<ul>
    ${cats.map(cat => html`
    <li>
        <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button class="showBtn" @click=${toggleStatus.bind(null, cat.id)}>Show status code</button>
            <div class="status" style="display: none" id="${cat.id}">
                <h4>Status Code: ${cat.statusCode}</h4>
                <p>${cat.statusMessage}</p>
            </div>
        </div>
    </li>`)}
</ul>`;

function toggleStatus(id){
    debugger
    const changeStyle = document.getElementById(id);
    const btnRef = document.querySelector('.showBtn');

    if(changeStyle.style.display == 'none'){
        changeStyle.style.display = 'block';
        btnRef.textContent = 'Hide status code';
    }else{
        changeStyle.style.display = 'none';
        btnRef.textContent = 'Show status code';
    }
}
render(template(cats), allCatsField)

