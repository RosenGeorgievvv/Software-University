import {html, render, page} from '../lib.js';
import { createSubmitHandler } from '../util.js';
import { login } from '../data/users.js';

const loginTemplate = (hand) => html`
<section id="login">
          <div class="form">
            <h2>Login</h2>
            <form @submit=${hand} class="login-form">
              <input type="text" name="email" id="email" placeholder="email" />
              <input type="password" name="password" id="password" placeholder="password" />
              <button type="submit">login</button>
              <p class="message">
                Not registered? <a href="#">Create an account</a>
              </p>
            </form>
          </div>
        </section>
`;

export function showLoginView(){
const hand = createSubmitHandler(onSubmit);
render(loginTemplate(hand));
}

async function onSubmit(data, form){
    const {email, password} = data;

    if(!email || !password){
        return alert('Incorrect email or password');
    }
    login(email, password);
}