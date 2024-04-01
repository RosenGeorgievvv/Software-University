import {html, render, page} from '../lib.js';
import { createSubmitHandler } from '../util.js';
import { register } from '../data/users.js';

const registerTemplate = (onSubmit) =>html`
<section id="register">
          <div class="form">
            <h2>Register</h2>
            <form @submit=${onSubmit} class="register-form">
              <input type="text" name="email" id="register-email" placeholder="email" />
              <input type="password" name="password" id="register-password" placeholder="password" />
              <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
              <button type="submit">register</button>
              <p class="message">Already registered? <a href="#">Login</a></p>
            </form>
          </div>
        </section>
`;

export function showRegisterView(){
    const hand = createSubmitHandler(onSubmit);
    render(registerTemplate(hand));
}

async function onSubmit(data, form){
    if(!data.email || !data.password || data.password !== data["re-password"]){
        return alert("Passwords don't match");
    }

    register(data.email, data.password);
}