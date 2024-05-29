document.getElementById('weather-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const location = document.getElementById('location-input').value;
    const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${location}&format=json&u=f`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '2bc60f10fcmsh5a579a07b78f45ep1bbe83jsnea936b5b1c19',
            'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        displayWeather(result);
    } catch (error) {
        console.error(error);
        displayError('Unable to fetch weather data. Please try again.');
    }
});

function displayWeather(data) {
    const weatherResult = document.getElementById('weather-result');
    weatherResult.innerHTML = `
        <h2>Weather in ${data.location.city}</h2>
        <p>Temperature: ${data.current_observation.condition.temperature}°F</p>
        <p>Condition: ${data.current_observation.condition.text}</p>
        <p>Humidity: ${data.current_observation.atmosphere.humidity}%</p>
    `;
}

function displayError(message) {
    const weatherResult = document.getElementById('weather-result');
    weatherResult.innerHTML = `<p class="error">${message}</p>`;
}
