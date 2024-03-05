
export function showRegisterView(){
    document.querySelectorAll('section').forEach(sec => sec.style.display = 'none');
    document.getElementById('form-sign-up').style.display = 'block';
}