function focused() {

    let div = document.getElementsByTagName('div')[0];

    Array.from(div.getElementsByTagName('input')).forEach(el =>{
        el.addEventListener('focus', focusOn);
    });

    Array.from(div.getElementsByTagName('input')).forEach(el =>{
        el.addEventListener('blur', focusOut);
    });

    function focusOn(e){
        let parentElement = e.target.parentNode;
        parentElement.classList.add("focused");
    }

    function focusOut(e){
        let parentElement = e.target.parentNode;
        parentElement.classList.remove('focused')
    }

}