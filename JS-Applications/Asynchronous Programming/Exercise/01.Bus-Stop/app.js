function getInfo() {
    let baseUrl = 'http://localhost:3030/jsonstore/bus/businfo/';
    let inputBusStop = document.getElementById('stopId');
    let stopName = document.getElementById('stopName');
    let busesList = document.getElementById('buses');
    
    busesList.innerHTML = '';

 

    fetch(baseUrl + `/${inputBusStop.value}`)
        .then((res) => res.json())
        .then((data) => {
            stopName.textContent = data.name;
            let numberOfBuses = Object.keys(data.buses).length;
            let newLi = document.createElement('li');


            for (const [key, value] of Object.entries(data.buses)) {
                let newLi = document.createElement('li');
                newLi.textContent = `Bus ${key} arrives in ${value} minutes`;
                busesList.appendChild(newLi);
            }
        })
        .catch((error) => stopName.textContent = 'Error');
}
