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
    { passive: true }
});

// Number of visits

// Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

// Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    numVisits = 1;
    visitsDisplay.textContent = `This is your first visit. Welcome!`;
}

// Increment the number of visits by one.
numVisits++;

// Store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);

// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.

