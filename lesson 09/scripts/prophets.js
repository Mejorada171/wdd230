const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let fullName = document.createElement('h2');
      let dateBirth = document.createElement('p')
      let placeBirth = document.createElement('p');
      let portrait = document.createElement('img');

      // Create title elements
      let titleDateBirth = document.createElement('h3');
      let titlePlaceBirth = document.createElement('h3'); 

      // Set the titles
      titleDateBirth.textContent = 'Birthdate:';
      titlePlaceBirth.textContent = 'Birthplace:';
  
      // Build the h2 content out to show the prophet's full name
      fullName.textContent = `${prophet.name} ${prophet.lastname}`;
      dateBirth.textContent = `${prophet.birthdate}`;
      placeBirth.textContent = `${prophet.birthplace}`;


      // Build the image portrait by setting all the relevant attributes
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(fullName);
      card.appendChild(titleDateBirth);
      card.appendChild(dateBirth);
      card.appendChild(titlePlaceBirth);
      card.appendChild(placeBirth)
      card.appendChild(portrait);
        
      cards.appendChild(card);
    }); // end of arrow function and forEach loop
  }
  
async function getProphetData() {
    const response = await fetch('https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json');
    const data = await response.json();
    //console.table(data.prophets); // temporary testing of data retreival
    displayProphets(data.prophets); // note that we reference the prophets array of the JSON data object, not just the object
}

getProphetData();