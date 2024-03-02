
const url = "http://localhost:3030/jsonstore/collections/students";
const submitBtn = document.getElementById('submit');



submitBtn.addEventListener('click', onSubmitStudent);

async function getStudents(){
    const tBody = document.querySelector('tbody');
    tBody.innerHTML = '';
    const response = await fetch('http://localhost:3030/jsonstore/collections/students');
    const data = await response.json();

    Object.values(data).map(onSubmitStudent).forEach((eachStudent) => tBody.append(eachStudent));
}


function onSubmitStudent({firstName, lastName, facultyNumber, grade}){
    const trElement = document.createElement('tr');
    const tdFirstName = document.createElement('th', firstName);
    const tdLastName = document.createElement('th', lastName);
    const tdFacNumber = document.createElement('th', facultyNumber);
    const tdGrade = document.createElement('th', grade);
    trElement.append(tdFirstName, tdLastName, tdFacNumber, tdGrade);
    
    return trElement;
}

function createElement(type, text){
    const element = document.createElement(type);
    element.textContent = text;
    
    return element;

}

async function sendStudent(e){
    e.preventDefault();

    const form = Array.from(document.querySelectorAll('div>input'));
    const values = form.map((v) => v.value);

    form.map((input) => (input.value = ''));
    const [firstName, lastName, facultyNumber, grade] = values;

    if(isNaN(grade) || isNaN(facultyNumber)){
        return alert('Grade and Faculty Number must be Number');
    }

    if(firstName == '' || lastName == '' || facultyNumber == '' || grade = ''){
        alert('All fields are required!');
    }

    const response = await fetch(url, {
        method: "POST",
        headers: { 'Content-type': 'application/json'},
        body: JSON.stringify({firstName, lastName, facultyNumber, grade})
    })

    return 
}
