import { del, get, post, put } from "./api.js";

const baseUrl = 'http://localhost:3030';

const endpoints = {
    getBooks: `/jsonstore/collections/books`,
    getBookById: (id) => `/jsonstore/collections/books/${id}`,
    postBook: `/jsonstore/collections/books`,
    updateBook: (id) => `/jsonstore/collections/books/${id}`,
    deleteBook: (id) => `/jsonstore/collections/books/${id}`
};

export const getBooks = async () => {
    return get(baseUrl + endpoints.getBooks);
}

export const getBookById = async (id) => {
    return get(baseUrl + endpoints.getBookById(id));
}
export const postBook = async (author, title) => {
    return post(baseUrl + endpoints.postBook, { author, title });
}

export const updateBook = async (id, author, title, _id) => {
    const body = { author, title };
    if (_id) {
        body._id = _id;
    }
    return put(baseUrl + endpoints.updateBook(id), body);
}

export const deleteBook = async (id) => {
    return del(baseUrl + endpoints.deleteBook(id));
}