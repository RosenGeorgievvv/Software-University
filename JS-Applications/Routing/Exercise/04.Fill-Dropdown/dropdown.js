import { html, render } from "../node_modules/lit-html/lit-html.js";

const townsUrl = 'http://localhost:3030/jsonstore/advanced/dropdown';
const menuRef = document.getElementById('menu');
const itemTextRef = document.getElementById('itemText');
document.querySelector('form').addEventListener('submit', addTown);

const optionTemplate = (town) => html`<option value=${town._id}>${town.text}</option>`;

await showTowns();

async function showTowns() {
    const towns = await get(townsUrl);
    render(Object.values(towns).map(town => optionTemplate(town)), menuRef);
}

async function addTown(event) {
    event.preventDefault();

    await post(townsUrl, { text: itemTextRef.value });
    itemTextRef.value = '';
    await showTowns();
}

async function get(url) {
    return request('GET', url);
}

async function post(url, body) {
    return request('POST', url, body);
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
        const res = await fetch(url, options);
        if (!res.ok) {
            const error = await res.json();
            throw error;
        }

        const data = await res.json();
        return data;

    } catch (error) {
        alert(`Error: ${error.message}`);
        throw error;
    }
}