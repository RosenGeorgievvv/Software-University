function solve() {

    let departure = document.getElementById('depart');
    const arrival = document.getElementById('arrive');
    const url = 'http://localhost:3030/jsonstore/bus/schedule'

    
    function depart() {
        departure.addEventListener('click', fetch(url).then((response) => response.json()).then((data) => console.log(data)))
            
    }

    function arrive() {
        console.log('Arrive TODO...');
    }

    return {
        depart,
        arrive
    };
}

let result = solve();