function extractText() {

    let list = document.querySelectorAll("ul#items")
    let placeArea = document.getElementById('result');

    for(let node of list){
        placeArea.value += node.textContent + '\n';
    }
}