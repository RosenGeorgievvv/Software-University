function addItem() {
  
    let newItemText = document.getElementById('newItemText')

    let newLiElement = document.createElement('li');
    newLiElement.textContent = newItemText.value;

    let list = document.getElementById('items');
    list.appendChild(newLiElement)

    document.getElementById('newItemText').value = ''

// Delete operation:
   let deleteButton = document.createElement('a');
   deleteButton.textContent = '[Delete]';
   deleteButton.href = "#";
   deleteButton.addEventListener('click', onDelete);
   newLiElement.appendChild(deleteButton);




   
   function onDelete(e){
    let deleteBtn = e.target;
    let liElement = deleteBtn.parentElement;
    liElement.remove();
   }
}