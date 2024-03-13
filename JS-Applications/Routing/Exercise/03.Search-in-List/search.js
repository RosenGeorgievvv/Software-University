import { html, render } from "https://esm.run/lit-html@1";
import {towns} from './towns.js';

console.log(towns);

const searchButtonRef = document.querySelector('button');

searchButtonRef.addEventListener('click', search);

const inputField = document.getElementById('searchText');
const displayInfo = document.getElementById('result');
const townsDivRef = document.getElementById('towns')

const template = (towns) => html`
<ul>${towns.map(t => html`<li>${t}</li>`)}</ul>
`

render(template(towns), townsDivRef);
function search() {
   let count = 0;
   displayInfo.textContent = '';

   document.querySelectorAll('#towns li').forEach(t =>{
      t.classList.remove('active');

      if(t.textContent.includes(inputField.value)){
         t.classList.add('active');
         count++;
      }
   })
displayInfo.textContent = `${count} matches found`
}
