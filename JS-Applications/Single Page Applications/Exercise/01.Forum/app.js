import { showComments, getDate } from './utils.js';

const mainSection = document.getElementById('main-section');
const commentSection = document.getElementById('comment-section');
const topicContainer = document.querySelector('div[class="main-topic-container"]');
const topicFormSection = document.getElementById('topic-form');
const homeBtn = document.querySelector('header nav a');
const postBtn = document.querySelector('button[class="public"]');
const cancelBtn = document.querySelector('button[class="cancel"]');
const url = `http://localhost:3030/jsonstore/collections/myboard/posts`;

commentSection.style.display = 'none';

addEvents();

fetchAllTopics();

function addEvents() {
    homeBtn.addEventListener('click', () => {
        mainSection.style.display = '';
        commentSection.style.display = 'none';
        fetchAllTopics();
    });

    topicContainer.addEventListener('click', (ev) => {
        ev.preventDefault();

        if (ev.target.tagName == 'H2') {
            const id = ev.target.dataset.id;
            showComments(id);
        }
    });

    topicFormSection.addEventListener('submit', (ev) => {
        ev.preventDefault();
    });

    cancelBtn.addEventListener('click', ev => {
        const form = ev.target.parentElement.parentElement;
        form.reset();
    });

    postBtn.addEventListener('click', async (ev) => {
        const form = ev.target.parentElement.parentElement;
        const topic = formTopicData(form);

        if (topic === undefined) {
            alert('All fields must be completed!');
            form.reset();
            return;
        }

        const result = postNewTopic(topic);
        fetchAllTopics();
        form.reset();
    });
}

async function fetchAllTopics() {
    const data = await fetch(url);

    if (data.ok === false) {
        const error = await data.json();
        throw new Error(error.message);
    }

    const topics = Object.values(await data.json());

    if (topics.length !== 0) {
        topicContainer.innerHTML = '';
        topics.forEach(m => topicContainer.appendChild(topicCard(m)));
    }

    topicContainer.style.display = '';
}

function formTopicData(ev) {
    const form = new FormData(ev);
    const title = form.get('topicName');
    const creator = form.get('username');
    const commentContent = form.get('postText');
    const date = getDate();

    // console.log(title, creator, commentContent, date);
    if (title === '' || creator === '' || commentContent === '') {
        return undefined;
    }

    return { title, creator, commentContent, date };
}

async function postNewTopic(topic) {
    const response = await fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(topic)
    });

    if (response.ok !== true) {
        const error = await error.json();
        throw new Error(error.message);
    }

    return await response.json();
}

function topicCard(topic) {
    const element = document.createElement('div');
    element.classList.add('topic-container');
    element.innerHTML = `
    <div class="topic-name-wrapper"">
        <div class="topic-name">
            <a href="#" class="normal">
                <h2  data-id="${topic._id}">${topic.title}</h2>
            </a>
            <div class="columns">
                <div>
                    <p>Date: <time>${topic.date}</time></p>
                    <div class="nick-name">
                        <p>Username: <span>${topic.creator}</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

    return element;
}