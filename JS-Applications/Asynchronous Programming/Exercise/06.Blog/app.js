const url = 'http://localhost:3030/jsonstore/blog/';

function attachEvents() {

    const loadPostsRef = document.getElementById('btnLoadPosts');
    const viewPostsRef = document.getElementById('btnViewPost');
    const postsRef = document.getElementById('posts');
    const postTitleRef = document.getElementById('post-title');
    const postBodyRef = document.getElementById('post-body');
    const postCommentsRef = document.getElementById('post-comments');

    loadPostsRef.addEventListener('click', loadPosts);
    viewPostsRef.addEventListener('click', viewPosts);

    const posts = [];

    async function loadPosts() {
        postsRef.innerHTML = '';
        const postsData = await get('posts');

        for (let value of Object.values(postsData)) {
            const option = document.createElement('option');
            option.value = value.id;
            option.textContent = value.title;
            postsRef.appendChild(option);
            posts.push({
                title: value.title,
                body: value.body
            });
        }
    }


    async function viewPosts() {
        const chosenOption = Array.from(document.querySelectorAll('option')).find(option => option.selected);

        if (chosenOption == undefined) return;

        const comments = await get('comments');

        const body = posts.find(post => post.title == chosenOption.textContent).body;
        postTitleRef.textContent = chosenOption.textContent;
        postBodyRef.textContent = body;
        postCommentsRef.innerHTML = '';
        for (let comment in comments) {
            if (comments[comment].postId == chosenOption.value) {
                const li = document.createElement('li');
                li.id = comments[comment].id;
                li.textContent = comments[comment].text;
                postCommentsRef.appendChild(li);
            }
        }
    }
}

async function get(info) {
    try {
        const res = await fetch(`${url}${info}`);
        if (!res.ok) throw new Error();

        const data = await res.json();
        return data;
    } catch (e) {
        alert(`Error: ${e.message}`);
    }
}

attachEvents();