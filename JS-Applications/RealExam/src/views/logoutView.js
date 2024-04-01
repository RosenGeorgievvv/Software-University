import { logout } from "../data/users.js";
import {page} from '../lib.js'
import { updateNav } from "../util.js";

export async function logoutView(){
    await logout();
    page.redirect('/');
    updateNav();
}