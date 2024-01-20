function showText() {
    document.getElementById('text').style.display = 'inline';
    document.getElementById('more').style.display = 'none'
}

//secondway:




function showText() {
    let text = document.querySelector("#text");
    text.setAttribute('style', 'display:inline;');
    
    let more = document.querySelector("#more");
    more.setAttribute('style', 'display:none;');

}