// Path to the JSON file in the parent directory

// Example player JSON data
const filePath = '../players.json'; // Adjust this path as per your setup

// Fetch and read the JSON file
fetch(filePath)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // Parse JSON from the response
  })
  .then(jsonData => {
    const players = jsonData.players; // Extract the players array
    const container = document.getElementById('card-container'); // Ensure this ID exists in your HTML

    // Loop through each player and create a card
    players.forEach(player => {
      // Create the player card
      const card = document.createElement('div');
      card.className = 'player-card';

      // Set the card's inner HTML
      card.innerHTML = `
        <div class="rating">${player.rating}</div>
            <div class="position">${player.position}</div>
            <img class="photo" src="${player.photo}" alt="${player.name}">
            <h2 class="name" >${player.name}</h2>
            <div class="stats">
              <span>PAC ${player.pace}</span>
              <span>SHO ${player.shooting}</span>
              <span>PAS ${player.passing}</span>
              <span>DRI ${player.dribbling}</span>
              <span>DEF ${player.defending}</span>
              <span>PHY ${player.physical}</span>
            </div>
            <img class="flag" src="${player.flag}" alt="${player.nationality}">
            <img class="logo" src="${player.logo}" alt="${player.club}">
          </div>  
      `;
          if (player.position === "GK") {

            card.innerHTML = `
        <div class="rating">${player.rating}</div>
            <div class="position">${player.position}</div>
            <img class="photo" src="${player.photo}" alt="${player.name}">
            <h2 class="name" >${player.name}</h2>
            <div class="stats">
              <span>DIV ${player.diving}</span>
              <span>HAN ${player.handling}</span>
              <span>KIK ${player.kicking}</span>
              <span>REF ${player.reflexes}</span>
              <span>PAC ${player.speed}</span>
              <span>PSN ${player.positioning}</span>
            </div>
            <img class="flag" src="${player.flag}" alt="${player.nationality}">
            <img class="logo" src="${player.logo}" alt="${player.club}">
          </div>  `
          }
      // Append the card to the container
      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error loading the JSON file:", error);
  });

  const buttonshow = document.querySelector("#showAllPlayersBtn");

  // buttonshow.addEventListener('click' , ()=>{
  //   console.log('clicked');
    
    const playercontainer = document.querySelector(".theall");
    // playercontainer.classList.toggle('hidden')
    buttonshow.addEventListener("click", () => {
      // Toggle the visibility of the section
      playercontainer.classList.toggle("hidden");
    });
  
  // })

 const gkbutton = document.querySelector("#gk");
 

