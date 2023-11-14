// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.74939157527679&lon=6.642789529543665&units=imperial&appid=c64220d3b72c3fe7a1f1b3a06da7a2a4';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${formatTemperature(data.main.temp)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);
    captionDesc.textContent = `${capitalize(data.weather[0].description)}`;
}

// STRETCH CHALLENGES

function capitalize(str) {
    return str.replace(/\b\w/g, function (match) {
        return match.toUpperCase();
    });
}

function formatTemperature(temp) {
    // Use parseFloat to handle cases where temp is a string
    // Round to the nearest integer
    const roundedTemp = parseFloat(temp).toFixed(0);

    return `${roundedTemp}`;
}

