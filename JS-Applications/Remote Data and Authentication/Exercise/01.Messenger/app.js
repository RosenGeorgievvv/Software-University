function attachEvents() {
    document.getElementById('refresh').addEventListener('click', onLoadMsg);
    document.getElementById('submit').addEventListener('click', onSubmit)
    const url = "http://localhost:3030/jsonstore/messenger";


    function onSubmit(e) {
        let nameRef = document.querySelector("input[name='author']");
        let textRef = document.querySelector("input[name='content']");
        let name = nameRef.value;
        let text = textRef.value;

        let data = {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({author: name, content: text})
        }


    }

    function onLoadMsg(e) {

    }


}

attachEvents();