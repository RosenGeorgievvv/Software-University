import { html, render } from "../node_modules/lit-html/lit-html.js";

document.querySelector('#searchBtn').addEventListener('click', search);
const searchInput = document.getElementById('searchField');
const tbody = document.querySelector('.container tbody');

const tableUrl = 'http://localhost:3030/jsonstore/advanced/table';


const rowTemplate = (person) => html`
      <tr>
         <td>${person.firstName} ${person.lastName}</td>
         <td>${person.email}</td>
         <td>${person.course}</td>
      </tr>
      `;


await loadPeopleInfo();

async function loadPeopleInfo() {
   const people = await get(tableUrl);
   render(Object.values(people).map(person => rowTemplate(person)), tbody);
}

function search() {
   if (searchInput.value == '') {
      return;
   }

   tbody.querySelectorAll('tr').forEach(tr => {
      tr.classList.remove('select');

      if ([...tr.querySelectorAll('td')].some(td => td.textContent.toLowerCase().includes(searchInput.value.toLowerCase()))) {
         tr.classList.add('select');
      }
   })
   searchInput.value = '';
}

async function get(url) {
   return request('GET', url);
}

async function request(method, url, body) {
   const headers = {
      'Content-Type': 'application/json'
   };
   const options = {
      method: method
   };
   if (body) {
      options.headers = headers;
      options.body = JSON.stringify(body);
   }

   try {
      const response = await fetch(url, options);
      if (!response.ok) {
         const error = await response.json();
         throw error;
      }

      const data = await response.json();
      return data;

   } catch (error) {
      alert(`Error: ${error.message}`);
      throw error;
   }
}