const mainSection = document.getElementById('main-section');
const commentSection = document.getElementById('comment-section');
const topicContainer = document.querySelector('div[class="main-topic-container"]');
const topicDetailSection = commentSection.querySelector('.theme-content')
const url = `http://localhost:3030/jsonstore/collections/myboard/posts`;
const commentsUrl = `http://localhost:3030/jsonstore/collections/myboard/comments`;

export async function showComments(topicId) {
    mainSection.style.display = 'none';
    topicContainer.style.display = 'none';
    commentSection.style.display = '';

    const topic = await getTopicById(topicId);
    const div = document.createElement('div');
    div.classList.add('comment');
    div.innerHTML = `
  <div class="header">
      <img src="./static/profile.png" alt="avatar">
      <p><span>${topic.creator}</span> posted on <time>${topic.date}</time></p>
      <p class="post-content">${topic.commentContent}</p>
  </div>
`;
    topicDetailSection.replaceChildren(div);

    commentSection.querySelector('form').addEventListener('submit', (ev) => {
        const comment = getCommentData(ev);
        comment.topicId = topicId;
        const newComment = postNewComment(comment);
        loadComments(topicId);
    });

    loadComments(topicId);
}

async function postNewComment(comment) {
    const response = await fetch(commentsUrl, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(comment)
    });

    if (response.ok !== true) {
        const error = await response.json();
        throw new Error(error.message);
    }

    return await response.json();
}

async function getComments() {
    const response = await fetch(commentsUrl);

    if (response.ok != true) {
        const error = await response.json();
        throw new Error(error.message);
    }

    return await response.json();
}

function getCommentData(ev) {
    ev.preventDefault();
    const form = document.getElementById('comment-form');
    const data = new FormData(form);
    const text = data.get('postText');
    const username = data.get('username');
    const date = getDate();

    if (text == '' || username == '') {
        alert('All fields must be completed!');
        form.reset();
        return;
    }

    form.reset();

    return { text, username, date };
}

async function loadComments(topicId) {
    const allComments = await getComments();
    const filteredComments = Object.values(allComments).filter(c => c.topicId === topicId);
    const commentSections = document.getElementById('all-comments');
    commentSections.innerHTML = '';

    filteredComments.forEach(e => {
        const div = document.createElement('div');
        div.classList.add('user-comment');
        div.innerHTML = `
    <div class="topic-name-wrapper">
        <div class="topic-name">
            <p><strong>${e.username}</strong> commented on <time>${e.date}</time></p>
            <div class="post-content">
                 <p>${e.text}</p>
            </div>
        </div>
    </div>
`;
        // div.dataset.id = topicId;
        commentSections.appendChild(div);
    });
}

export async function getTopicById(id) {
    const response = await fetch(`${url}/${id}`);

    if (response.ok != true) {
        const error = await response.json();
        throw new Error(error.message);
    }

    const topic = await response.json();
    return topic;
}

export function getDate() {
    const currentDate = new Date();
    const date = currentDate.getDate();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const hour = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const milliSeconds = currentDate.getMilliseconds();

    const fullDate = `${year}-${checkDate(month)}-${checkDate(date)}T${checkDate(hour)}:${checkDate(minutes)}:${checkDate(seconds)}.${checkMilliSeconds(milliSeconds)}Z`;

    return fullDate;

    function checkDate(date) {
        return date < 10 ? `0${date}` : date;
    }

    function checkMilliSeconds(date) {
        return date.toString().padStart(3, 0);
    }
}