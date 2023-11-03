document.addEventListener("DOMContentLoaded", function() {
    // Let's get the current year
    const yearElement = document.getElementById("year");
    const yearOptions = {
        year: "numeric"
    };
    yearElement.textContent = new Date().toLocaleDateString("en-US", yearOptions);

    // Let's get the Last Modified date and time
    const lastModifiedElement = document.getElementById("lastModified");
    const lastModifiedOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };
    const currentDate = new Date().toLocaleDateString("en-US", lastModifiedOptions);

    lastModifiedElement.textContent = "Last Modified: " + currentDate;
});

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