const baseURL = "https://github.com/Mejorada171/wdd230";
const linksURL = "https://mejorada171.github.io/wdd230/data/links.json"; //GITHUB

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

function displayLinks(weeks) {
    let currentWeek = 1
    console.log(weeks);
    weeks.lessons.forEach(week => {
        currentWeek++
        // console.log(week)
        let linkItem = document.createElement("li");
        linkItem.innerText = currentWeek + "° ";
        week.links.forEach(link => {
            let linkAnchor = document.createElement("a");
            linkAnchor.href = link.url;
            linkAnchor.innerText = link.title + "|";
            linkItem.appendChild(linkAnchor);
        })
        document.getElementById("activities").appendChild(linkItem);
    });
}

getLinks()

// WEATHER API

// select HTML elements in the document
const icon = document.getElementById("icon");
const temp = document.getElementById("temperature");
const conditions = document.getElementById("conditions");

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.65875335213452&lon=-103.33883647282913&units=imperial&appid=c64220d3b72c3fe7a1f1b3a06da7a2a4';

async function apifetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data); // testing only
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
    conditions.innerHTML = data.weather[0].description;

    // Assigning the icon URL to a variable
    const iconSrc = `https://openweathermap.org/img/wn/02n@2x.png`;
    const desc = data.weather[0].description;

    // Creating an <img> element and setting its attributes
    const iconImg = document.createElement('img');
    iconImg.setAttribute('src', iconSrc);
    iconImg.setAttribute('alt', desc);

    // Appending the <img> element to the 'icon' element in the DOM
    icon.innerHTML = '';
    icon.appendChild(iconImg);
}


function formatTemperature(temp) {
    // Round to the nearest integer
    const roundedTemp = parseFloat(temp).toFixed(0);

    return `${roundedTemp}`;
}
