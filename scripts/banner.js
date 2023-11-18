// BANNER

const currentDate = new Date();
const dayOfWeek = currentDate.getDay();
const bannerElement = document.getElementById("banner");
console.log(currentDate)

if (dayOfWeek >= 1 && dayOfWeek <= 3) {
    // Show the banner
    bannerElement.style.display = 'block'; // Change the display property to 'block' to show the banner
} else {
    // Hide the banner
    bannerElement.style.display = 'none'; // Change the display property to 'none' to hide the banner
}