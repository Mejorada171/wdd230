// Let's get the current year

const options = {
    year: "numeric"
};

year.innerHTML = new Date().toLocaleDateString("en-US", options);

// Let's get the Last Modified date and hour

let lastModifiedElement = document.getElementById("lastModified");

let options1 = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
};

let currentDate = new Date().toLocaleDateString("en-US", options1);

lastModified.textContent = currentDate;

// Hamburger menu

const hamButton = document.querySelector('.button');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

// Dark Mode Button 

const modeButton = document.querySelector("#mode");
const events = document.getElementById("events");
const weather = document.getElementById("weather");
const member = document.getElementById("member");
const footer = document.querySelector("footer");
const header = document.querySelector("header");
const body = document.querySelector("body");
const purpose1 = document.getElementById("p");
const purpose2 = document.getElementById("pp");


modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("☑️")) {
        modeButton.textContent = "❎";
        events.style.background = "#000";
        events.style.color = "#FFFFFF";
        weather.style.backgroundColor = "#000";
        weather.style.color = "#FFFFFF";
        member.style.backgroundColor = "#000";
        member.style.color = "#FFFFFF";
        footer.style.backgroundColor = "#000";
        footer.style.color = "#FFFFFF";
        header.style.backgroundColor = "#000";
        header.style.color = "#FFFFFF";
        body.style.backgroundColor = "#505050";
        purpose1.style.color = "#FFFFFF";
        purpose2.style.color = "#FFFFFF";
    } else {
        modeButton.textContent = "☑️";
        events.style.background = "#3C6E71";
        events.style.color = "#FFFFFF";
        weather.style.backgroundColor = "#3C6E71";
        weather.style.color = "#FFFFFF";
        member.style.backgroundColor = "#3C6E71";
        member.style.color = "#FFFFFF";
        footer.style.backgroundColor = "#3C6E71";
        footer.style.color = "#FFFFFF";
        header.style.backgroundColor = "#3C6E71";
        header.style.color = "#FFFFFF";
        body.style.backgroundColor = "#FFFFFF";
        purpose1.style.color = "#353535";
        purpose2.style.color = "#353535";
    }
});

// Display a message

// Check if localStorage has a 'lastVisit' item
if (localStorage.getItem('lastVisit')) {
    // Retrieve the last visit date from localStorage
    const lastVisitDate = new Date(localStorage.getItem('lastVisit'));
    const currentDate = new Date();

    // Calculate the difference in milliseconds between the current visit and the last visit
    const timeDifference = currentDate - lastVisitDate;

    // Calculate the number of days
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference === 0) {
        document.getElementById('message').textContent = "Back so soon! Awesome!";
    } else {
        const message = `You last visited ${daysDifference} ${daysDifference === 1 ? 'day' : 'days'} ago.`;
        document.getElementById('message').textContent = message;
    }
} else {
    // This is the user's first visit
    document.getElementById('message').textContent = "Welcome! Let us know if you have any questions.";
}

// Store the current visit date in localStorage
localStorage.setItem('lastVisit', new Date().toString());