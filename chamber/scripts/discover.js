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
        events.style.backgroundColor = "#000";
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

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const gridDisplay = document.querySelector(".grid");

gridButton.addEventListener("click", () => {
  gridDisplay.classList.remove("list-view");
});

listButton.addEventListener("click", () => {
  gridDisplay.classList.add("list-view");
  removeAllImages();
});

function removeAllImages() {
  const listItems = gridDisplay.querySelectorAll("li");
  listItems.forEach(item => {
    if (!gridDisplay.classList.contains("list-view")) {
      const imageElement = item.querySelector("img");
      if (imageElement) {
        item.removeChild(imageElement);
      }
    }
  });
}