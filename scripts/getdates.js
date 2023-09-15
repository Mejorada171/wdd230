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
