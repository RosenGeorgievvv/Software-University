import { render } from "lit-html/lit-html.js";
import { layoutTemplate } from "./components/layout.js";
import { setBookIds } from "./utils.js";

const body = document.querySelector('body');
await setBookIds();

render(layoutTemplate(), body);