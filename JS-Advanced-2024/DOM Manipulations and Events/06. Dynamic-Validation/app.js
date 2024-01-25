function validate() {
   
    let regexp = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/;
    let input = document.getElementById('email');

    input.addEventListener('change', email);

    function email(e){
        if(regexp.test(e.target.value)){
            e.target.removeAttribute('class');
            return;
        }
        e.target.className = 'error';
    }
}