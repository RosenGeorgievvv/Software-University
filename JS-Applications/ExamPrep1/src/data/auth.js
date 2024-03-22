import { clearUserData, setUserData } from '../utils/userHelper.js';
import { get, post } from './api.js';

const host = 'http://localhost:3030';

const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
};

export async function login(data) {
    const userData = await post(host + endpoints.login, data);
    setUserData(userData);
    return userData;
}

export async function register(data) {
    const userData = await post(host + endpoints.register, data);
    setUserData(userData);
    return userData;
}

export async function logout() {
    await get(host + endpoints.logout);
    clearUserData();
}
