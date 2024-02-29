function attachEvents() {
    const url = "http://localhost:3030/jsonstore/phonebook";
    const ulRef = document.getElementById('')
    document.getElementById('btnLoad').addEventListener('click', onLoadAllRecords)

    async function onLoadAllRecords(e){

        let response = await fetch(url)
        let data = await response.json();
        Object.values(data).forEach(rec => {
            createAndAppendLi(rec);
        })
    }

    function createAndAppendLi(data){
        let li = document.createElement('li');
        li.textContent = `${data.person}: ${data.phone}`;


    }
}

attachEvents();