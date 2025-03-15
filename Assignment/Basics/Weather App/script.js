// script.js

const API_KEY = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

document.getElementById('searchBtn').addEventListener('click', () => {
    const city = document.getElementById('city').value;
    if (city) {
        getWeather(city);
    } else {
        alert('Please enter a city name');
    }
});

async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        
        // Extract relevant information
        const cityName = data.name;
        const temp = data.main.temp;
        const description = data.weather[0].description;
        const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

        // Display in the UI
        document.getElementById('city-name').textContent = cityName;
        document.getElementById('temperature').textContent = `Temperature: ${temp}°C`;
        document.getElementById('description').textContent = `Condition: ${description}`;
        document.getElementById('weather-icon').src = icon;
    } catch (error) {
        alert(error.message);
    }
}
