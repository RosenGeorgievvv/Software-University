import { html, render } from "https://esm.run/lit-html@1";
import page from "page.js";

page("/", showHome)

const root = document.querySelector('div[data-id="root"]');
const userNav = document.getElementById('user');
const guestNav = document.getElementById('guest');
