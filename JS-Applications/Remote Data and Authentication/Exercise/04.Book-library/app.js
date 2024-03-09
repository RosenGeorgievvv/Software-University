document.addEventListener('DOMContentLoaded', () => {
    const loadAllBooksButton = document.getElementById('loadBooks');
    const tbody = document.querySelector('tbody');
    const authorInput = document.querySelector('input[name="author"]');
    const titleInput = document.querySelector('input[name="title"]');
    const formElement = document.querySelector('form');

    loadAllBooksButton.addEventListener('click', loadAllBooks);
    formElement.addEventListener('submit', handleFormSubmit);
    tbody.addEventListener('click', handleRowButtonClick);

    const url = 'http://localhost:3030/jsonstore/collections/books';

    async function loadAllBooks() {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                const error = await response.json();
                throw error;
            }

            const booksData = await response.json();
            createBooksRows(Object.values(booksData));

        } catch (e) {
            alert(`Error: ${e.message}`);
        }
    }

    async function handleFormSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { title, author } = Object.fromEntries(formData.entries());

        if (title.length === 0 || author.length === 0) {
            return;
        }

        const data = { author, title };
        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        };

        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                const error = await response.json();
                throw error;
            }

            const resData = await response.json();
            tbody.appendChild(createRow(title, author, resData._id));
            authorInput.value = '';
            titleInput.value = '';

        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    }

    async function handleRowButtonClick(e) {
        const target = e.target;
        if (target.tagName === 'BUTTON') {
            const id = target.closest('tr').dataset.id;
            if (target.textContent === 'Edit') {
                moveForEdit(id);
            } else if (target.textContent === 'Delete') {
                deleteBook(id);
            }
        }
    }

    async function moveForEdit(id) {
        const row = document.querySelector(`tr[data-id="${id}"]`);
        const titleElement = row.querySelector('td:first-child');
        const authorElement = row.querySelector('td:nth-child(2)');

        document.querySelector('form h3').textContent = 'Edit FORM';
        titleInput.value = titleElement.textContent;
        authorInput.value = authorElement.textContent;

        formElement.removeEventListener('submit', handleFormSubmit);
        formElement.addEventListener('submit', async function editBook(e) {
            e.preventDefault();
            const { title, author } = Object.fromEntries(new FormData(e.currentTarget).entries());
            const data = { author, title };

            const editUrl = `${url}/${id}`;
            const options = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            };

            try {
                const response = await fetch(editUrl, options);

                if (!response.ok) {
                    const error = await response.json();
                    throw error;
                }

                titleElement.textContent = title;
                authorElement.textContent = author;
                document.querySelector('form h3').textContent = 'FORM';
                formElement.removeEventListener('submit', editBook);
                formElement.addEventListener('submit', handleFormSubmit);

            } catch (e) {
                alert(`Error: ${e.message}`);
            }
        });
    }

    async function deleteBook(id) {
        const deleteUrl = `${url}/${id}`;
        const options = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        };

        try {
            const response = await fetch(deleteUrl, options);

            if (!response.ok) {
                const error = await response.json();
                throw error;
            }

            document.querySelector(`tr[data-id="${id}"]`).remove();

        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    }

    function createRow(title, author, id) {
        const tr = document.createElement('tr');
        tr.dataset.id = id;

        const editBtn = createElement('button', 'Edit');
        const deleteBtn = createElement('button', 'Delete');

        const tdButtons = createElement('td');
        append(tdButtons, [editBtn, deleteBtn]);
        append(tr, [
            createElement('td', title),
            createElement('td', author),
            tdButtons
        ]);

        return tr;
    }

    function createBooksRows(booksData) {
        tbody.innerHTML = '';
        booksData.forEach(book => {
            const { title, author, _id } = book;
            tbody.appendChild(createRow(title, author, _id));
        });
    }

    function createElement(type, content) {
        const element = document.createElement(type);
        if (content) {
            element.textContent = content;
        }
        return element;
    }

    function append(parent, children) {
        children.forEach(child => {
            parent.appendChild(child);
        });
        return parent;
    }
});
