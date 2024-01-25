function deleteByEmail() {
    let email = document.querySelector('[name="email"]');
    let rows = Array.from(document.querySelectorAll("#customers tbody tr"));
    let success = false;

    for (let row of rows) {
        if (row.children[1].textContent === email.value) {
            row.remove();
            success = true;
        }
    }

    let output = document.getElementById('result');

    if(success){
        output.textContent = 'Deleted.';
    }else{
        output.textContent = 'Not found.'
    }

    document.querySelector('[name="email"]').value = ''
}