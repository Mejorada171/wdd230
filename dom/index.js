// STEP 1: Select the element by id and change the div tag content in the HTML body
document.getElementById("div").innerHTML = "I'm Jorge"

// STEP 2: Change the background color of the div in the HTML body
word = document.getElementById("div")
word.style.backgroundColor = "pink"

// STEP 3: Select the element by . class name
let desserts = document.getElementsByClassName("desserts");

// STEP 4: Use the style property to change the background color of every div
desserts[0].style.backgroundColor = "pink";
desserts[1].style.backgroundColor = "yellow";
desserts[2].style.backgroundColor = "skyblue";

//STEP 5: Select element by tag name.
let brands = document.getElementsByTagName("li")

//STEP 6: Change the background color
brands[0].style.backgroundColor = "lightgreen"
brands[1].style.backgroundColor = "pink"
brands[2].style.backgroundColor = "skyblue"

// STEP 7: Create a new div element
var newDiv = document.createElement("div")

// STEP 8: Set its text content and a background color
newDiv.textContent = "We finished!"
newDiv.style.backgroundColor = "skyblue"

// STEP 9: Now insert the new div into the DOM if needed
// For example, to append it to the body of the document
document.body.appendChild(newDiv)

