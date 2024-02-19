//Task: Use the index.html and app.js files to solve this problem. You have NO permission to directly change the given HTML code (index.html file).

// Your task

// Write the missing JavaScript code to make the Task Manager Functionality works as follows:

// When the [Add] button is clicked, first you need to validate the inputs. If any of the input fields are empty, the function doesn’t make anything.

// After validating the input fields, you need to add the new task (article) in the "Open" section.

// The HTML structure looks like this:

// The article should have two buttons "Start" and "Delete". Be careful to set the classes for the buttons and the parent-div.

// When the [Start] button is clicked, you need to move the Task in the section "In Progress". Be careful with the buttons! The HTML structure looks like this:

// When the [Delete] button is clicked, the Task (whole article) should be removed from the HTML.

// After clicking the [Finish] button, the Task will be completed, and you should move the article to the section "Complete". The buttons with their parent div-element should be removed



//Solution:

function solve() {
    let task = document.getElementById('task');
    let description = document.getElementById('description');
    let date = document.getElementById('date');

    let [_,colOpen, colInProgress, colComplete] =
        Array.from(document.querySelectorAll('section'))
            .map(s=>s.children[1]);

    document.getElementById('add').addEventListener('click', addTask);

    function createElement(type, value, className) {
        let element =  document.createElement(type);
        element.textContent = value;
        if (className){
            element.classList.add(className);
        }
        return element
    }

    function addTask(ev) {
        ev.preventDefault();
        let article = document.createElement('article');
        article.appendChild(createElement('h3', task.value));
        article.appendChild(createElement('p', `Description: ${description.value}`));
        article.appendChild(createElement('p', `Due Date: ${date.value}`));

        let btnWrapper = document.createElement('div');
        btnWrapper.classList.add('flex');

        let btnStart = createElement('button', 'Start', 'green');
        let btnDelete = createElement('button', 'Delete', 'red');
        let btnFinish = createElement('button', 'Finish', 'orange');

        btnStart.addEventListener('click', startHandler);
        btnDelete.addEventListener('click', deleteHandler);
        btnFinish.addEventListener('click', finishHandler);

        btnWrapper.appendChild(btnStart);
        btnWrapper.appendChild(btnDelete);

        article.appendChild(btnWrapper);
        colOpen.appendChild(article);

        function startHandler() {
            btnStart.remove();
            btnWrapper.appendChild(btnFinish);
            colInProgress.appendChild(article);
        }

        function deleteHandler() {
            article.remove();
        }

        function finishHandler() {
            btnWrapper.remove();
            colComplete.appendChild(article);
        }
    }
}