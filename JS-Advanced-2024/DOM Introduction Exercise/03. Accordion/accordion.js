function toggle() {

    let button = document.getElementsByClassName('button')[0];
    let divText = document.getElementById('extra');
    
    if(button.textContent === "More"){
        divText.style.display = "block";
        button.textContent = "Less"
    }else{
        button.textContent = "More";
        divText.style.display = "none"
    }
}