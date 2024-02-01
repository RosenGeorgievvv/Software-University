function validate() {
    const regexp = new RegExp(/^\S+@\S+\.\S+$/gm);

    const input = document.getElementById('email');

    input.addEventListener('change', onChane);
    
    function onChane(e) {
        e.target.classList.remove('error');
        if (!regexp.test(e.target.value)) {
            e.target.classList.add('error');
        }
    }
}