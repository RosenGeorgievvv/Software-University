import { html, render } from "https://esm.run/lit-html@1";
import {towns} from './towns.js';

console.log(towns);

const searchButtonRef = document.querySelector('button');

searchButtonRef.addEventListener('click', search);

const inputField = document.getElementById('searchText');
const displayInfo = document.getElementById('result');

const template = (towns) => html`
<ul>${towns.map(t => html`<li>${t}</li>`)}</ul>
`

render(template(towns), displayInfo);
function search() {
   // TODO
}
