function solve() {

   let button = document.getElementsByTagName('button');
   let textArea = document.getElementsByTagName('textarea')[0];

   let myList = new Map();

   Array.from(button).forEach(btn =>{
      btn.addEventListener('click', (e) =>{
         if(e.target.className === 'add-product'){
            let currentElement = e.target.parentElement;

            let price = currentElement.nextElementSibling.innerHTML;
            let brand = currentElement.previousElementSibling.children[0].innerHTML;

            if(!myList.has(brand)){
               myList.set(brand, 0);
            }
            myList.set(brand, myList.get(brand) + Number(price));

            textArea.value += `Added ${brand} for ${price} to the cart.\n`
         }else{
            let total = Number(Array.from(myList.values()).reduce((a,b) => +a+ +b, 0))
            textArea.value += `You bought ${Array.from(myList.keys()).join(', ')} for ${total.toFixed(2)}.`
         
            let buttons = Array.from(document.querySelectorAll('button'));
            buttons.forEach(button => button.disabled = true);
         }
      })
   })
}