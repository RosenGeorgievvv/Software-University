
const url = "http://localhost:3030/jsonstore/collections/students";
const submitBtn = document.getElementById('submit');



submitBtn.addEventListener('click', onSubmitStudent);


function onSubmitStudent({firstName, lastName, facultyNumber, grade}){


}

function createElement(type, text){
  
}

async function sendStudent(e){
    e.preventDefault();

    const response = await fetch(url, {
        method: "POST",
        headers: { 'Content-type': 'application/json'},
        body: JSON.stringify({firstName, lastName, facultyNumber, grade})
    })
}
