function calculateWindChill() {
    const temperatureInput = document.getElementById("temperature");
    const windspeedInput = document.getElementById("windspeed");
    const windChillValue = document.getElementById("windChillValue");

    const temperature = parseFloat(temperatureInput.value);
    const windspeed = parseFloat(windspeedInput.value);

    if (temperature <= 50 && windspeed > 3.0) {
        // Calculate wind chill using the formula
        const windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * temperature * Math.pow(windspeed, 0.16));
        windChillValue.textContent = windChill.toFixed(2) + " °F";
    } else {
        windChillValue.textContent = "N/A";
    }
}

// API WEATHER

// select HTML elements in the document
const temp = document.getElementById("li1");
const conditions = document.getElementById("li3");

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.65875335213452&lon=-103.33883647282913&units=imperial&appid=c64220d3b72c3fe7a1f1b3a06da7a2a4';

async function apifetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apifetch();

function displayResults(data) {
    temp.innerHTML = `${formatTemperature(data.main.temp)}&deg;F`;

    // Accessing the weather description from the first index (index 0) of the weather array
    conditions.innerHTML = `${data.weather[0].description}`;
}

function formatTemperature(temp) {
    // Use parseFloat to handle cases where temp is a string
    // Round to the nearest integer
    const roundedTemp = parseFloat(temp).toFixed(0);

    return `${roundedTemp}`;
}

// BANNER

document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("banner");
    const closeBtn = document.getElementById("closeBannerBtn");

    // Getting the day of the week
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay();

    // Function to check if it's a day to display the banner
    function shouldDisplayBanner(day) {
        return day >= 1 && day <= 3; // Monday to Wednesday 
    }

    // Function to show the banner
    function showBanner() {
        banner.style.display = "block";
    }

    // Function to hide the banner
    function hideBanner() {
        banner.style.display = "none";
    }

    // Check if it's a day to display the banner and show/hide accordingly
    if (shouldDisplayBanner(dayOfWeek)) {
        showBanner();
    } else {
        hideBanner();
    }

    // Close banner functionality
    closeBtn.addEventListener("click", function () {
        hideBanner();
    });
});


// OpenWeatherMap API URL FOR FORECAST
 
const apiKey = 'c64220d3b72c3fe7a1f1b3a06da7a2a4';
const latitude = 49.74939157527679;
const longitude = 6.642789529543665;
const units = 'imperial';
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;

// Function to get forecast data
async function getWeatherForecast() {
    try {
        // Fetch forecast data
        const forecastResponse = await fetch(forecastURL);
        const forecastData = await forecastResponse.json();

        // Get today's date
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Filter forecast for the next three days after November 15th
        const filteredForecast = forecastData.list.filter(forecast => {
            const forecastDate = new Date(forecast.dt * 1000);
            return forecastDate.getTime() > today.getTime() && forecastDate.getDate() > 15;
        }).slice(0, 3); // Limit to the next 3 days

        // Display forecast
        const forecastContainer = document.getElementById('forecast');
        forecastContainer.innerHTML = ''; // Clear previous content

        filteredForecast.forEach(forecast => {
            const date = new Date(forecast.dt * 1000);
            const forecastElement = document.createElement('div');
            forecastElement.classList.add('forecast-item');
            forecastElement.innerHTML = `
                <p><strong>Date:</strong> ${date.toDateString()}</p>
                <p><strong>Temperature:</strong> ${forecast.main.temp}°F</p>
                <p><strong>Description:</strong> ${forecast.weather[0].description}</p>
            `;
            forecastContainer.appendChild(forecastElement);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the function to fetch and display forecast data
getWeatherForecast();


