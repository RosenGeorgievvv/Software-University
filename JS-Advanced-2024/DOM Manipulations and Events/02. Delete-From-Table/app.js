function deleteByEmail() {
let email = document.querySelector('[name="email"]');
let rows = Array.from(document.querySelectorAll("#customers tbody tr"));


for(let row of rows){
    if(row.children[1].textContent === email.value){
        row.remove();

    }
}

}