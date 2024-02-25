function getInfo() {

    let inputField = document.getElementById('stopId');
    let submitButton = document.getElementById('submit');
    let stopName = document.getElementById('stopName');
    let busesUl = document.getElementById('buses');
    let url = 'http://localhost:3030/jsonstore/bus/businfo/:busId'

    fetch(url + `/${inputField.value}`)
    .then((response) => response.json())
    .then((data) => {
        stopName.textContent = data.name;
        let busesCount = Object.keys(data.buses).length;
        let listElement = document.createElement('li');

        for(let [key, value] of Object.entries(data.buses)){
            let newListElement = document.createElement('li');
            newListElement.textContent = `Bus ${key} arrives at ${value} minutes`;
            busesUl.appendChild(newListElement);
        }
    })
    .catch((error) => busesUl.textContent = "Error");

    inputField.value = '';
    busesUl.innerHTML = '';
}

