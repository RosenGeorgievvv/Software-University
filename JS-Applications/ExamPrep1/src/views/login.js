import { login } from '../data/auth.js';
import { html } from '../lib/lib.js';
import { createSubmitHandler } from '../utils/formHelper.js';

const loginTemplate = (onLogin) => html`
    <section id="login">
        <div class="form">
            <h2>Login</h2>
            <form @submit=${onLogin} class="login-form">
                <input type="text" name="email" id="email" placeholder="email" />
                <input type="password" name="password" id="password" placeholder="password" />
                <button type="submit">login</button>
                <p class="message">Not registered? <a href="/register">Create an account</a></p>
            </form>
        </div>
    </section>
`;

export async function showLoginPage(ctx) {
    ctx.render(loginTemplate(createSubmitHandler(onLogin)));

    async function onLogin({ email, password }, form) {
        if (!email) {
            return alert('Email is required');
        } else if (!password) {
            return alert('Password is required');
        }

        await login({ email, password });
        ctx.goTo('/');
    }
}
