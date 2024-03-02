document.getElementById('editForm').style.display = 'none';

async function getAllBooks() {
    document.querySelector('tbody').innerHTML = '';
    const tbody = document.querySelector('tbody');
    const books = await request('http://localhost:3030/jsonstore/collections/books');

    tbody.innerHTML = Object.entries(books).map(createRow).join('');

    function createRow([id, book]) {
        const result = `
        <tr data-id="${id}">
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>
                <button class="editBtn">Edit</button>
                <button class="deleteBtn">Delete</button>
            </td>
        </tr>`;
        return result;
    }
}

async function createBook(event) {
    event.preventDefault();

    const form = new FormData(event.target);

    const book = {
        author: form.get('author'),
        title: form.get('title')
    }

    if (book.author.trim() === '' || book.title.trim() === '') {
        return alert('All fields are required!');
    }

    await request('http://localhost:3030/jsonstore/collections/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
    });

    getAllBooks();
}

async function updateBook(event) {
    event.preventDefault();

    const form = new FormData(event.target);
    const id = form.get('id');
    const book = {
        author: form.get('author'),
        title: form.get('title')
    }

    await request(`http://localhost:3030/jsonstore/collections/books/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
    });

    document.getElementById('createForm').style.display = 'block';
    document.getElementById('editForm').style.display = 'none';

    getAllBooks();
}

async function deleteBook(id) {
    await request(`http://localhost:3030/jsonstore/collections/books/${id}`, {
        method: 'DELETE'
    });
    getAllBooks();
}

function handleTableClick(event) {
    if (event.target.classList.contains('editBtn')) {
        document.getElementById('createForm').style.display = 'none';
        document.getElementById('editForm').style.display = 'block';
        const bookId = event.target.parentNode.parentNode.dataset.id;
        loadBookForEditing(bookId);
    } else if (event.target.classList.contains('deleteBtn')) {
        const bookId = event.target.parentNode.parentNode.dataset.id;
        deleteBook(bookId);
    }
}

function start() {
    document.querySelector('tbody').innerHTML = '';
    document.getElementById('loadBooks').addEventListener('click', getAllBooks);
    document.querySelector('form').addEventListener('submit', createBook);
    document.querySelector('#editForm').addEventListener('submit', updateBook);

    document.querySelector('#editForm [type="button"]').addEventListener('click', (event) => {
        document.getElementById('createForm').style.display = 'block';
        document.getElementById('editForm').style.display = 'none';

    });
    document.querySelector('table').addEventListener('click', handleTableClick);
    getAllBooks();
}

start();

async function loadBookForEditing(id) {
    const book = await request(`http://localhost:3030/jsonstore/collections/books/${id}`);

    document.querySelector('#editForm [name="id"]').value = id;
    document.querySelector('#editForm [name="title"]').value = book.title;
    document.querySelector('#editForm [name="author"]').value = book.author;
}

async function request(url, options = {}) {
    const response = await fetch(url, options);
    if (!response.ok) {
        const error = await response.json();
        alert(error.message || 'Something went wrong!');
        throw new Error(error.message || 'Something went wrong!');
    }
    return response.json();
}
