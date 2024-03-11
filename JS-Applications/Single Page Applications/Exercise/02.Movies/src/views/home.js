

export function showHome(){
    document.querySelectorAll('section').forEach(sec => sec.style.display = 'none');
    document.getElementById('home-page').style.display = 'block';
}