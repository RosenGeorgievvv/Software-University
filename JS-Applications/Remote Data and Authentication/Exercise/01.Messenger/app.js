function attachEvents() {
  document.getElementById('refresh').addEventListener('click', onLoadMsg);
  document.getElementById('submit').addEventListener('click', onSubmit)

function onSubmit(e){
    let nameRef = document.querySelector("input[name='author']");
    let textRef = document.querySelector("input[name='content']");
    let name = nameRef.value;
    let text = textRef.value;

    

}

function onLoadMsg(e){

}


}

attachEvents();