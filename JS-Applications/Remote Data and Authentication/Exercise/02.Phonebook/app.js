function attachEvents() {
    const url = "http://localhost:3030/jsonstore/phonebook";
    document.getElementById('btnLoad').addEventListener('click', onLoadAllRecords)

    async function onLoadAllRecords(e){

        let response = await fetch(url)
        let data = await response.json();
    }
}

attachEvents();