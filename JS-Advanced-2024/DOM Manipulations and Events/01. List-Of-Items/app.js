function addItem() {
   let placeInput = document.getElementById("newItemText");

   if(placeInput.value.length === 0){
    return;
   }

   let newLiElement = document.createElement('li');

   newLiElement.appendChild(document.createTextNode(placeInput));
   document.getElementById('items').appendChild(newLiElement);

   document.getElementById('newItemText').value = ''
}