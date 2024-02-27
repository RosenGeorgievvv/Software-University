function lockedProfile() {

    const mainSection = document.getElementById('main');
    const url = 'http://localhost:3030/jsonstore/advanced/profiles';

    fetch(url)
        .then(response => {
            if (response.status !== 200) {
                throw new Error()
            }
            return response.json();
        }).then(data => {
            let values = Object.entries(data);
            let firstValue = values.shift();
            document.querySelector('input[name="user1Username"]').value = firstValue[1].username;
            document.querySelector('input[name="user1Email"]').value = firstValue[1].email;
            document.querySelector('input[name="user1Age"]').value = firstValue[1].age;

            values.forEach(e => {
                let profile = document.querySelector('.profile');
                let profileDuplicate = profile.cloneNode(true);

                profileDuplicate.querySelector('input[name="user1Email"]').value = e[1].email;
                profileDuplicate.querySelector('input[name="user1Age"]').value = e[1].age;
                profileDuplicate.querySelector('input[name="user1Username"]').value = e[1].username;

                mainSection.appendChild(profileDuplicate);
            });

            let allBtns = document.querySelectorAll('button');
            allBtns.forEach(ev => {
                ev.addEventListener('click', (e) => {
                    let shown = e.target.parentElement.querySelectorAll('input[type="radio"]')[1];
                    let hidden = e.target.parentElement.getElementsByTagName('div')[0];

                    if (hidden.classList.contains('hiddenInfo')) {
                        if (e.target.textContent === "Show more" && shown.checked) {
                            hidden.classList.remove('hiddenInfo');
                            e.target.textContent = "Hide it"
                        }
                    } else {
                        e.target.textContent = "Show more";
                        hidden.classList.add('hiddenInfo')
                    }
                })
            })
        })
        .catch();
}