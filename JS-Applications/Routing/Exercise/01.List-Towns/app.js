import { html, render } from 'https://esm.run/lit-html@1';

//take DOM elements
const form = document.querySelector('form');
const root = document.getElementById('root');

form.addEventListener('click', onClick);

function onClick(e){
    e.preventDefault()
}

