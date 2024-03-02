(() => {
    getData();
    document.querySelector('#submit').addEventListener('click', sendData)
})();

async function getData() {
    const tBody = document.querySelector('tbody');
    tBody.innerHTML = ''
    const response = await fetch('http://localhost:3030/jsonstore/collections/students');
    const data = await response.json();

    Object.values(data).map(createStudents).forEach((eachStudent) => tBody.append(eachStudent));
}

function createStudents({ facultyNumber, firstName, grade, lastName }) {
    const trElement = document.createElement('tr');
    const tdFirstName = createElement('th', firstName);
    const tdLastName = createElement('th', lastName);
    const tdFacultyNumber = createElement('th', facultyNumber);
    const tdGrade = createElement('th', grade);
    trElement.append(tdFirstName, tdLastName, tdFacultyNumber, tdGrade);

    return trElement;
}

function createElement(type, text) {
    const element = document.createElement(type);
    element.textContent = text;

    return element;
}

async function sendData(event) {
    event.preventDefault();

    const form = Array.from(document.querySelectorAll('div>input'))
    const values = form.map((v) => v.value);

    form.map((input) => (input.value = ''));
    const [firstName, lastName, facultyNumber, grade] = values;

    if (isNaN(grade) || isNaN(facultyNumber)) {
        return alert('Grade and Faculty Number must be Number');
    }

    if (firstName == '' || lastName == '' || facultyNumber == '' || grade == '') {
        alert('All fields are required!');
    }

    const response = await fetch('http://localhost:3030/jsonstore/collections/students', {
        method: 'post',
        headers: { 'Content-Type': 'applications/json' },
        body: JSON.stringify({ firstName, lastName, facultyNumber, grade })
    })
    return getData();
}