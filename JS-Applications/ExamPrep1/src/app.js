import { logout } from './data/auth.js';
import { page, render } from './lib/lib.js';
import { getUserData } from './utils/userHelper.js';
import { showCreatePage } from './views/create.js';
import { showDashboardPage } from './views/dashboard.js';
import { showDetailsPage } from './views/details.js';
import { showEditPage } from './views/edit.js';
import { showHomePage } from './views/home.js';
import { layoutTemplate } from './views/layout.js';
import { showLoginPage } from './views/login.js';
import { showRegisterPage } from './views/register.js';

const root = document.getElementById('wrapper');

page(decorateContext);
page('/index.html', '/');
page('/', showHomePage);
page('/create', showCreatePage);
page('/dashboard', showDashboardPage);
page('/details/:id', showDetailsPage);
page('/details/:id/edit', showEditPage);
page('/register', showRegisterPage);
page('/login', showLoginPage);
page('/logout', logoutAction);

page.start();

function decorateContext(ctx, next) {
    ctx.render = renderView;
    ctx.goTo = page.redirect;
    next();
}

function renderView(content) {
    const userData = getUserData();
    render(layoutTemplate(userData, content), root);
}

async function logoutAction(ctx) {
    await logout();
    ctx.goTo('/');
}
