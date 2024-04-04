import { html, render } from "../node_modules/lit-html/lit-html.js";

const form = document.querySelector('.content');
const root = document.getElementById('root');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    const towns = (new FormData(form)).get('towns');

    if (towns == '') {
        return;
    }
    render(createTemplate(towns), root);
    form.reset();
}

const createTemplate = (towns) => html`
<ul>
    ${towns.split(', ').map(town => html`<li>${town}</li>`)}
</ul>`;                 