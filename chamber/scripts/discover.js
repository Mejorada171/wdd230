document.addEventListener("DOMContentLoaded", function () {
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

// DIRECTORY PAGE

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
    // example using arrow function
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}

const baseURL = "https://github.com/Mejorada171/wdd230";
const linksURL = "https://mejorada171.github.io/wdd230/chamber/data/members.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.companies);
}

function displayLinks(companies) {
    // Select the grid element
    let gridElement = document.querySelector(".grid");

    companies.forEach(company => {
        // Create a new list item
        let companyItem = document.createElement("li");

        // Create elements for each piece of information
        let imageElement = document.createElement("img");
        imageElement.src = company.image; // Set the image source

        let nameElement = document.createElement("p");
        nameElement.innerText = "Name: " + company.name;

        let addressElement = document.createElement("p");
        addressElement.innerText = "Address: " + company.address;

        let phoneNumberElement = document.createElement("p");
        phoneNumberElement.innerText = "Phone Number: " + company.phoneNumber;

        let websiteElement = document.createElement("a");
        websiteElement.href = company.websiteUrl;
        websiteElement.innerText = "Website: " + company.websiteUrl;

        // Append the elements to the list item
        companyItem.appendChild(imageElement);
        companyItem.appendChild(nameElement);
        companyItem.appendChild(addressElement);
        companyItem.appendChild(phoneNumberElement);
        companyItem.appendChild(websiteElement);

        // Append the list item to the grid element
        gridElement.appendChild(companyItem);
    });
}

getLinks();

// DISCOVER PAGE

// Function to get the current date in YYYY-MM-DD format
function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Function to update the message in the sidebar based on visit history
function updateMessage() {
    const lastVisit = localStorage.getItem('lastVisit');
    const currentDate = getCurrentDate();

    if (!lastVisit) {
        // First visit
        localStorage.setItem('lastVisit', currentDate);
        document.getElementById('message').textContent = 'Welcome! Let us know if you have any questions.';
    } else {
        // Calculate the difference in days
        const diffInMs = new Date(currentDate) - new Date(lastVisit);
        const diffInDays = Math.floor(diffInMs / (24 * 60 * 60 * 1000));

        if (diffInDays === 0) {
            // Less than a day
            document.getElementById('message').textContent = 'Back so soon! Awesome!';
        } else {
            // More than a day
            const dayOrDays = diffInDays === 1 ? 'day' : 'days';
            document.getElementById('message').textContent = `You last visited ${diffInDays} ${dayOrDays} ago.`;
        }

        // Update the last visit date
        localStorage.setItem('lastVisit', currentDate);
    }
}

// Call the updateMessage function when the page loads
updateMessage();