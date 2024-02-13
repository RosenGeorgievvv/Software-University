window.addEventListener('load', solve);

function solve() {

    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const peopleCount = document.getElementById('people-count');
    const dateFrom = document.getElementById('from-date');
    const daysCount = document.getElementById('days-count');
    const nextButton = document.getElementById('next-btn');

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

    }


}




