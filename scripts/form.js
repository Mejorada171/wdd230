const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

const kp1 = document.querySelector("#password");
const kp2 = document.querySelector("#password-repeated");
const message = document.querySelector("#formmessage");

kp2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
    if (kp1.value !== kp2.value) {
        message.textContent = "❗Key Phrases DO NOT MATCH!";
        message.style.visibility = "show";
        kp2.style.backgroundColor = "#fff0f3";
        kp2.value = "";
        kp2.focus();
    } else {
        message.style.display = "none";
        kp2.style.backgroundColor = "#fff";
        kp2.style.color = "#000";
    }
}

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
