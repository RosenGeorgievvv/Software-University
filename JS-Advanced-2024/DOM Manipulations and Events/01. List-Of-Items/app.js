function addItem() {
    let placeInput = document.getElementById("newItemText").value;

    if (placeInput.length === 0) {
        return;
    }
    let newLiElement = document.createElement('li');

    newLiElement.appendChild(document.createTextNode(placeInput));
    document.getElementById('items').appendChild(newLiElement);
    document.getElementById('newItemText').value = ''

    
}