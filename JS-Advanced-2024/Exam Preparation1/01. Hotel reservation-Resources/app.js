window.addEventListener('load', solve);

function solve() {

    let inputFields = Array.from(document.querySelectorAll('input')).slice(0, 5)
    let nextButton = document.getElementById('next-btn')
    let infoList = document.querySelector('.info-list')
    let confirmList = document.querySelector('.confirm-list')
    let verification = document.getElementById('verification');

    nextButton.addEventListener("click", onClick);
    function onClick(e) {
        e.preventDefault();




        let [firstName, lastName, checkIn, checkOut, peopleCount] = inputFields;
        if (!firstName.value || !lastName.value || !checkIn.value || !checkOut.value || !peopleCount.value) {
            return
        }

        infoList.innerHTML = `<li class="reservation-content">
         <article>
           <h3>Name: ${firstName.value} ${lastName.value}</h3>
           <p>From date: ${checkIn.value}</p>
           <p>To date: ${checkOut.value}</p>
           <p>For ${peopleCount.value} people</p>
         </article>
         <button class="edit-btn">Edit</button>
         <button class="continue-btn">Continue</button>
      </li>
      `

        let editFirstName = firstName.value;
        let editLastName = lastName.value;
        let editCheckIn = checkIn.value;
        let editCheckOut = checkOut.value;
        let editpeopleCount = peopleCount.value;

        firstName.value = "";
        lastName.value = "";
        checkIn.value = "";
        checkOut.value = "";
        peopleCount.value = "";
        buttonsState(true);

        document.querySelector('.edit-btn').addEventListener('click', onEdit);

        function onEdit() {
            firstName.value = editFirstName;
            lastName.value = editLastName;
            checkIn.value = editCheckIn;
            checkOut.value = editCheckOut;
            peopleCount.value = editpeopleCount;
            buttonsState(false);
            infoList.innerHTML = '';
        }

        function buttonsState(nextDisabled = true) {
            if (nextDisabled) {
                nextButton.disabled = true
                document.querySelector('.edit-btn').disabled = false
                document.querySelector('.continue-btn').disabled = false
            } else {
                nextButton.disabled = false
                if (document.querySelector('.edit-btn') != null) {
                    document.querySelector('.edit-btn').disabled = true
                    document.querySelector('.continue-btn').disabled = true
                }
            }
        }

        document.querySelector('.continue-btn').addEventListener('click', onContinue)

        function onContinue() {

            confirmList.innerHTML = `<li class="reservation-content">
         <article>
           <h3>Name: ${editFirstName} ${editLastName}</h3>
           <p>From date: ${editCheckIn}</p>
           <p>To date: ${editCheckOut}</p>
           <p>For ${editpeopleCount} people</p>
         </article>
    <button class="confirm-btn">Confirm</button>
    <button class="cancel-btn">Cancel</button>
  </li>
  `
            infoList.innerHTML = ''

            document.querySelector('.confirm-btn').addEventListener('click', onConfirm);
            function onConfirm() {
                confirmList.innerHTML = ''
                buttonsState(false);

                verification.setAttribute('class', 'reservation-confirmed');
                verification.textContent = 'Confirmed.';
            }

            document.querySelector('.cancel-btn').addEventListener('click', onCancel);

            function onCancel() {
                confirmList.innerHTML = ''
                buttonsState(false)

                verification.setAttribute('class', 'reservation-cancelled');
                verification.textContent = 'Cancelled.';

            }
        }
    }
}