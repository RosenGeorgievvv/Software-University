window.addEventListener('load', solve);

function solve() {

    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const peopleCount = document.getElementById('people-count');
    const dateFrom = document.getElementById('from-date');
    const daysCount = document.getElementById('days-count');
    const nextButton = document.getElementById('next-btn');
    const infoTicketUl = document.querySelector("#info-ticket ul");

    nextButton.addEventListener('click', onClick);


    function onClick(e) {
        e.preventDefault();
        let firstName = firstNameInput.value;
        let lastName = lastNameInput.value;
        let people = peopleCount.value;
        let date = dateFrom.value;
        let days = daysCount.value;

        if (!firstName || !lastName || !people || !date || !days) {
            return;
        }

        let ticket = createTicket(firstName, lastName, people, date, days);

        infoTicketUl.appendChild(ticket);
    }

    function createTicket(firstName, lastName, people, date, days){
        let li = document.createElement('li');
        li.classList.add('ticket');
        li.innerHTML += "<article>"
        li.innerHTML += `<h3>Name: ${firstName} ${lastName}</h3>`
        li.innerHTML += `<p>From date: ${date}</p>`
        li.innerHTML += `<p>For ${days} days</p>`
        li.innerHTML += `<p>For ${people} people</p>`
        li.innerHTML += "</article>";

        return li
    }


}




