function attachEvents() {
    let conditions = {
        'Sunny': '&#x2600',
        'Partly sunny': '&#x26C5',
        'Overcast': 'Overcast &#x2601',
        'Rain': '&#x2614',
    };

    const location = document.getElementById('location');
    const forecast = document.getElementById('forecast');

    document.getElementById('submit').addEventListener('click', getWeather);
       
    async function getWeather() {
        try {
            const url = `http://localhost:3030/jsonstore/forecaster/locations`;
            const response = await fetch(url);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(`${response.status} (${response.statusText})`);
            }

            const town = data.find(x => x.name.toLowerCase() == location.value.toLowerCase());

            if (!town) {
                throw new Error('Error (Invalid town name)!')
            }
            forecast.style.display = "block";

            if (town) {
                getTodayForecast(town.code);
                getUpcomingForecast(town.code);
                location.value = '';
            }
        } catch (error) {
            forecast.style.display = "block";
            forecast.innerHTML = `<p id="errorMessage">${error.message}</p>`
        }
    }

    async function getTodayForecast(code) {
        if (document.getElementById('errorMessage')) {
            document.getElementById('errorMessage').remove();
        }

        const url = `http://localhost:3030/jsonstore/forecaster/today/${code}`;
        const response = await fetch(url);
        const data = await response.json();

        const current = document.getElementById('current');

        let forecastsDivElement = document.createElement('div')
        forecastsDivElement.setAttribute('class', 'forecasts')
        forecastsDivElement.innerHTML = `
          <span class="condition symbol">${conditions[data.forecast.condition]}</span>
          <span class="condition">
            <span class="forecast-data">${data.name}</span>
            <span class="forecast-data">${data.forecast.low}°/${data.forecast.high}°</span>
            <span class="forecast-data">${data.forecast.condition}</span>
          </span>   
        `
        current.appendChild(forecastsDivElement)
    }

    async function getUpcomingForecast(code) {
        const url = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;
        const response = await fetch(url);
        const data = await response.json();

        const upcoming = document.getElementById('upcoming');
        const divForecastInfo = document.createElement('div');
        divForecastInfo.setAttribute('class', 'forecast-info')
        for (const x of data.forecast) {
            divForecastInfo.innerHTML += `
        <span class="upcoming">
        <span class="symbol">${conditions[x.condition]}</span>
        <span class="forecast-data">${x.low}°/${x.high}°</span>
        <span class="forecast-data">${x.condition}</span>
        </span>
        `
        }
        upcoming.appendChild(divForecastInfo);
    }
}

attachEvents();