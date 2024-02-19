window.addEventListener("load", solve);

function solve() {

  const snowmanNameInput = document.getElementById('snowman-name');
  const snowmanHeightInput = document.getElementById('snowman-height');
  const locationInput = document.getElementById('location');
  const creatorInput = document.getElementById('creator-name');
  const attributeOption = document.getElementById('special-attribute');
  const snowmanPreview = document.querySelector('.snowman-preview');
  const snowList = document.querySelector('.snow-list');

  const addBtn = document.querySelector('.add-btn');

  addBtn.addEventListener('click', addFunction);



  function addFunction() {

    if (!snowmanNameInput.value || !snowmanHeightInput.value || !locationInput.value || !creatorInput.value || !attributeOption.value) {
      return;
    }

    const listItem = document.createElement('li');
    listItem.classList.add('snowman-content');
    listItem.innerHTML = `
                <article>
                    <p>Name: ${snowmanNameInput.value}</p>
                    <p>Height: ${snowmanHeightInput.value} cm</p>
                    <p>Location: ${locationInput.value}</p>
                    <p>Creator: ${creatorInput.value}</p>
                    <p>Attribute: ${attributeOption.value}</p>
                </article>
                <div class="btn-container">
                <button class="edit-btn">Edit</button>
                <button class="next-btn">Next</button>
                </div>
            `;

    addBtn.disabled = true;
    snowmanPreview.appendChild(listItem)

    let editName = snowmanNameInput.value;
    let editHeight = snowmanHeightInput.value;
    let editLocation = locationInput.value;
    let editCreator = creatorInput.value;
    let editAttribute = attributeOption.value;

    snowmanNameInput.value = '';
    snowmanHeightInput.value = '';
    locationInput.value = '';
    creatorInput.value = '';
    attributeOption.value = '';

    document.querySelector('.edit-btn').addEventListener('click', editButton);

    function editButton() {
      snowmanNameInput.value = editName;
      snowmanHeightInput.value = editHeight;
      locationInput.value = editLocation;
      creatorInput.value = editCreator;
      attributeOption.value = editAttribute;
      snowmanPreview.innerHTML = '';

      addBtn.disabled = false;
    }

    document.querySelector('.next-btn').addEventListener('click', nextButton);

    function nextButton() {

      snowList.appendChild(snowmanPreview.cloneNode(true));
      snowmanPreview.innerHTML = '';

      let sendBtn = document.createElement('button');
      sendBtn.textContent = 'Send';
      sendBtn.classList.add('send-btn');
      snowList.appendChild(sendBtn);

      document.querySelector('.send-btn').addEventListener('click', sendButton);

      function sendButton() {
        let mainEl = document.querySelector('main');
        mainEl.parentNode.removeChild(mainEl);

        let img = document.getElementById('back-img');
        img.style.display = 'block';

        let backButton = document.createElement('button');
        backButton.textContent = 'Back';
        backButton.classList.add('back-btn');

        backButton.addEventListener('click', () => {
          location.reload();
        })
        document.body.appendChild(backButton)
      }
    }
  }
}