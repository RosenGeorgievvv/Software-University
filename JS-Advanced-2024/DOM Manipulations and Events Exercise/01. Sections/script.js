function create(words) {

   for (let word of words) {
      let newDivElement = document.createElement('div');
      let newParagraphElement = document.createElement('p');
      newParagraphElement.textContent = word;
      newParagraphElement.style.display = 'none';

      newDivElement.addEventListener('click', clickHandlerFunc);

      newDivElement.appendChild(newParagraphElement);

      const contentReference = document.getElementById('content');
      contentReference.appendChild(newDivElement);

      function clickHandlerFunc(e) {
         let currentTarget = e.currentTarget;
         let children = currentTarget.children;
         let para = children[0];
         para.style.display = 'block';
      }
   }
}