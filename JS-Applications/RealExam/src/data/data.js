import { get, post, del, put } from "./request.js";

const endpoints = {
  allCyberpunks: "/data/cyberpunk?sortBy=_createdOn%20desc",
  cyberpunk: "/data/cyberpunk",
};

export async function getAllCyberpunks() {
  return await get(endpoints.allCyberpunks);
}

export async function createCyberpunk(data) {
  return await post(endpoints.cyberpunk, data);
}

export async function getCyberpunkById(id) {
  return await get(`${endpoints.cyberpunk}/${id}`);
}

export async function delCyberpunk(id){
    return await del(`${endpoints.cyberpunk}/${id}`);
}
export async function updateCyberpunk(id, data){
    return await put(`${endpoints.cyberpunk}/${id}`, data);
}
