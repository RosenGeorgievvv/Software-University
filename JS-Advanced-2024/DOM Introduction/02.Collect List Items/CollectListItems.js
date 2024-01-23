function extractText() {

    let list = document.querySelectorAll('ul#items');
    let textarea = document.getElementById('result');

    for(let node of list){
        textarea.value += node.textContent + '\n';
    }

}





