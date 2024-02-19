function addItem() {

    let newItemValue = document.getElementById('newItemText').value;

    if(newItemValue.length === 0){
        return;
    }

    let newLiElement = document.createElement('li');
    newLiElement.appendChild(document.createTextNode(newItemValue));
    document.getElementById('items').appendChild(newLiElement);

    document.getElementById('newItemText').value = ''
}