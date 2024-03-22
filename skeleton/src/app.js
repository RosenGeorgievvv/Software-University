import { page } from "./lib.js";
import { showExample } from "./views/example.js";
import * as api from './data/request.js'
import * as userApi from './data/users.js'

page("/", showExample);
page.start();

window.api = api;
window.userApi = userApi;


