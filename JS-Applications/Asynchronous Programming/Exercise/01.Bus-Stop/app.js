async function getInfo() {
  const stopIdRef = document.getElementById('stopId').value;
  const stopNameRef = document.getElementById('stopName');
  const busesListRef = document.getElementById('buses');

  busesListRef.innerHTML = '';

  try{
    const response = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopIdRef}`);
    if(!response.ok){
        const error = new Error();
        error.status = response.status;
        error.statusText = response.statusText;
        throw error;
    }
    const data = await response.json();

    stopNameRef.textContent = data.name;

    for(const [key, value] of Object.entries(data.buses)){
        const li = document.createElement('li');
        li.textContent = `Bus ${key} arrives in ${value} minutes`;
        busesListRef.appendChild(li);
    }
  }
  catch(error){
    stopNameRef.textContent = "Error";
  }
}
