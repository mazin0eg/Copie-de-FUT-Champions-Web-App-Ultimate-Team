const filePath = '../players.json';
let players;
fetch(filePath)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(jsonData => {
    players = jsonData.players;
    renderPlayers(); // Render the players initially
  })
  .catch(error => {
    console.error("Error loading the JSON file:", error);
  });

// Function to render players
function renderPlayers() {
  const container = document.getElementById("card-container");
  container.innerHTML = ""; // Clear existing cards

  players.forEach((player, index) => {
    const card = document.createElement("div");
    card.className = "player-card";
    card.innerHTML = `
      <div class="rating">${player.rating}</div>
      <div class="position">${player.position}</div>
      <img class="photo" src="${player.photo}" alt="${player.name}">
      <h2 class="name">${player.name}</h2>
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
      <button class="delete-btn hidden" data-index="${index}">❌</button>
    `;
    if (player.position === "GK") {
      card.innerHTML = `
        <div class="rating">${player.rating}</div>
        <div class="position">${player.position}</div>
        <img class="photo" src="${player.photo}" alt="${player.name}">
        <h2 class="name">${player.name}</h2>
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
        <button class="delete-btn hidden" data-index="${index}">❌</button>
      `;
    }
    // Add event listener to show the delete button on focus
    card.addEventListener("click", () => {
      const deleteBtn = card.querySelector(".delete-btn");
      deleteBtn.classList.toggle("hidden"); // Toggle the visibility of the delete button
    });

    // Add event listener for deleting the player
    card.querySelector(".delete-btn").addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent the card's click event from firing
      deletePlayer(index);
    });

    container.appendChild(card);
  });
}

// Function to delete a player
function deletePlayer(index) {
  players.splice(index, 1); // Remove the player from the array
  renderPlayers(); // Re-render the players
}

// Toggle all players visibility
const buttonshow = document.querySelector("#showAllPlayersBtn");
const playercontainer = document.querySelector(".theall");
buttonshow.addEventListener("click", () => {
  playercontainer.classList.toggle("hidden");
});




const addPlayerButton = document.querySelector("#addPlayerBtn");
const formContainer = document.querySelector("#form-container");

addPlayerButton.addEventListener("click", () => {
  // Toggle the form visibility
  if (formContainer.classList.contains("hidden")) {
    formContainer.classList.remove("hidden");
    formContainer.innerHTML = `
      <form id="addPlayerForm">
        
        <input type="text" name="name" placeholder="name" required>
       
           <input type="number" name="rating" placeholder="Rating" required>
        
        
          <select name="position" required>
            <option value="GK">Goalkeeper (GK)</option>
            <option value="DEF">Defender (DEF)</option>
            <option value="MID">Midfielder (MID)</option>
            <option value="FWD">Forward (FWD)</option>
          </select>
        
           <input type="number" name="pace" placeholder="Pace" required>
        
           <input type="number" name="shooting" placeholder="Shooting" required>
        
          <input type="number" name="passing" placeholder="Passing " required>
        
           <input type="number" name="dribbling" placeholder="Dribbling" required>
        
           <input type="number" name="defending" placeholder="Defending" required>
        
           <input type="number" name="physical" placeholder="Physical" required>
        
           <input type="text" name="photo" placeholder="Photo URL" required>
      
           <input type="text" name="flag" placeholder="Flag URL" required>
        
           <input type="text" name="logo" placeholder="Club Logo URL" required>
        
        <button type="submit">Add Player</button>
        
      </form>
    `;
  } else {
    formContainer.classList.add("hidden");
    formContainer.innerHTML = "";
  }
});

formContainer.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const newPlayer = Object.fromEntries(formData.entries());
  newPlayer.rating = Number(newPlayer.rating);
  newPlayer.pace = Number(newPlayer.pace);
  newPlayer.shooting = Number(newPlayer.shooting);
  newPlayer.passing = Number(newPlayer.passing);
  newPlayer.dribbling = Number(newPlayer.dribbling);
  newPlayer.defending = Number(newPlayer.defending);
  newPlayer.physical = Number(newPlayer.physical);

  players.push(newPlayer);

  const container = document.getElementById("card-container");
  container.innerHTML = ""; // Clear existing cards
  players.forEach(player => {
    const card = document.createElement("div");
    card.className = "player-card";
    card.innerHTML = `
      <div class="rating">${player.rating}</div>
      <div class="position">${player.position}</div>
      <img class="photo" src="${player.photo}" alt="${player.name}">
      <h2 class="name">${player.name}</h2>
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
      
    `;
    if (player.position === "GK") {
      card.innerHTML = `
        <div class="rating">${player.rating}</div>
        <div class="position">${player.position}</div>
        <img class="photo" src="${player.photo}" alt="${player.name}">
        <h2 class="name">${player.name}</h2>
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
      `;
      
    }
    container.appendChild(card);
  });

  // Hide and clear the form
  formContainer.classList.add("hidden");
  formContainer.innerHTML = "";
});


const gkbutton = document.querySelector("#gk");
gkbutton.addEventListener("click", (e) => {
  e.stopPropagation();
  const finded = players.filter((plr) => plr.position === "GK");
  let modal = document.querySelector(".gk-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.className = "gk-modal";
    document.body.appendChild(modal);
  }
  modal.innerHTML = "";
  const closeButton = document.createElement("div");
  closeButton.className = "close-button";
  closeButton.innerHTML = "✖";
  closeButton.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
  modal.appendChild(closeButton);
  finded.forEach(player => {
    const card = document.createElement("div");
    card.className = "player-card";
    card.innerHTML = `
      <div class="rating">${player.rating}</div>
      <div class="position">${player.position}</div>
      <img class="photo" src="${player.photo}" alt="${player.name}">
      <h2 class="name">${player.name}</h2>
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
    `;

    card.addEventListener("click", () => {
      const targetPositionButton = document.querySelector(`#${player.position.toLowerCase()}`);
    
      if (targetPositionButton) {
        // Check if the button already contains a player card
        if (targetPositionButton.querySelector(".player-card")) {
          // If there is already a player card, alert the user
          alert("A player is already assigned to this position.");
        } else {
          // Clear any existing content in the button
          targetPositionButton.innerHTML = "";
          gkbutton.classList.remove('cards-container')
          // Append the player card to the button
          targetPositionButton.appendChild(card);

          // Close the modal
          modal2.classList.add("hidden");
        }
      } else {
        alert(`No target button found for position: ${player.position}`);
      }
    });
    modal.appendChild(card);
  });
  modal.classList.remove("hidden");
});

const stbutton = document.querySelector("#st");
stbutton.addEventListener("click", (e) => {
  e.stopPropagation();
  const finded = players.filter((plr) => plr.position === "ST");
  let modal2 = document.querySelector(".st-modal");
  if (!modal2) {
    modal2 = document.createElement("div");
    modal2.className = "st-modal";
    document.body.appendChild(modal2);
  }
  modal2.innerHTML = "";
  const closeButton = document.createElement("div");
  closeButton.className = "close-button";
  closeButton.innerHTML = "✖";
  closeButton.addEventListener("click", () => {
    modal2.classList.add("hidden");
  });
  modal2.appendChild(closeButton);
  finded.forEach(player => {
    const card = document.createElement("div");
    card.className = "player-card";
    card.innerHTML = `
      <div class="rating">${player.rating}</div>
      <div class="position">${player.position}</div>
      <img class="photo" src="${player.photo}" alt="${player.name}">
      <h2 class="name">${player.name}</h2>
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
    `;

    card.addEventListener("click", () => {
      const targetPositionButton = document.querySelector(`#${player.position.toLowerCase()}`);
    
      if (targetPositionButton) {
        // Check if the button already contains a player card
        if (targetPositionButton.querySelector(".player-card")) {
          // If there is already a player card, alert the user
          alert("A player is already assigned to this position.");
        } else {
          // Clear any existing content in the button
          targetPositionButton.innerHTML = "";
          stbutton.classList.remove('cards-container')
          // Append the player card to the button
          targetPositionButton.appendChild(card);

          // Close the modal
          modal2.classList.add("hidden");
        }
      } else {
        alert(`No target button found for position: ${player.position}`);
      }
    });
    modal2.appendChild(card);
  });
  modal2.classList.remove("hidden");
});

const cb1button = document.querySelector("#cb1");
cb1button.addEventListener("click", (e) => {
  e.stopPropagation();
  const finded = players.filter((plr) => plr.position === "CB");
  let modal2 = document.querySelector(".cb1-modal");
  if (!modal2) {
    modal2 = document.createElement("div");
    modal2.className = "cb1-modal";
    document.body.appendChild(modal2);
  }
  modal2.innerHTML = "";
  const closeButton = document.createElement("div");
  closeButton.className = "close-button";
  closeButton.innerHTML = "✖";
  closeButton.addEventListener("click", () => {
    modal2.classList.add("hidden");
  });
  modal2.appendChild(closeButton);
  finded.forEach(player => {
    const card = document.createElement("div");
    card.className = "player-card";
    card.innerHTML = `
      <div class="rating">${player.rating}</div>
      <div class="position">${player.position}</div>
      <img class="photo" src="${player.photo}" alt="${player.name}">
      <h2 class="name">${player.name}</h2>
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
    `;

    card.addEventListener("click", () => {
      const targetPositionButton = document.querySelector(`#${player.position.toLowerCase()}`);
    
      if (targetPositionButton) {
        // Check if the button already contains a player card
        if (targetPositionButton.querySelector(".player-card")) {
          // If there is already a player card, alert the user
          alert("A player is already assigned to this position.");
        } else {
          // Clear any existing content in the button
          targetPositionButton.innerHTML = "";
          cb1button.classList.remove('cards-container')
          // Append the player card to the button
          targetPositionButton.appendChild(card);

          // Close the modal
          modal2.classList.add("hidden");
        }
      } else {
        alert(`No target button found for position: ${player.position}`);
      }
    });
    modal2.appendChild(card);
  });
  modal2.classList.remove("hidden");
});


const cb2button = document.querySelector("#cb2");

cb2button.addEventListener("click", (e) => {
  e.stopPropagation();

  const finded = players.filter((plr) => plr.position === "CB");

  let modal2 = document.querySelector(".cb2-modal");
  if (!modal2) {
    modal2 = document.createElement("div");
    modal2.className = "cb2-modal";
    document.body.appendChild(modal2);
  }
  modal2.innerHTML = "";

  const closeButton = document.createElement("div");
  closeButton.className = "close-button";
  closeButton.innerHTML = "✖";
  closeButton.addEventListener("click", () => {
    modal2.classList.add("hidden");
  });
  modal2.appendChild(closeButton);

  finded.forEach(player => {
    const card = document.createElement("div");
    card.className = "player-card";

    card.innerHTML = `
      <div class="rating">${player.rating}</div>
      <div class="position">${player.position}</div>
      <img class="photo" src="${player.photo}" alt="${player.name}">
      <h2 class="name">${player.name}</h2>
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
    `;
    card.addEventListener("click", () => {
      const targetPositionButton = document.querySelector(`#${player.position.toLowerCase()}`);
    
      if (targetPositionButton) {
        // Check if the button already contains a player card
        if (targetPositionButton.querySelector(".player-card")) {
          // If there is already a player card, alert the user
          alert("A player is already assigned to this position.");
        } else {
          // Clear any existing content in the button
          targetPositionButton.innerHTML = "";
          cb2button.classList.remove('cards-container')
          // Append the player card to the button
          targetPositionButton.appendChild(card);

          // Close the modal
          modal2.classList.add("hidden");
        }
      } else {
        alert(`No target button found for position: ${player.position}`);
      }
    });

    modal2.appendChild(card);
  });

  modal2.classList.remove("hidden");
});

const rbbutton = document.querySelector("#rb");

rbbutton.addEventListener("click", (e) => {
  e.stopPropagation();

  const finded = players.filter((plr) => plr.position === "RB");

  let modal2 = document.querySelector(".rb-modal");
  if (!modal2) {
    modal2 = document.createElement("div");
    modal2.className = "rb-modal";
    document.body.appendChild(modal2);
  }
  modal2.innerHTML = "";

  const closeButton = document.createElement("div");
  closeButton.className = "close-button";
  closeButton.innerHTML = "✖";
  closeButton.addEventListener("click", () => {
    modal2.classList.add("hidden");
  });
  modal2.appendChild(closeButton);

  finded.forEach(player => {
    const card = document.createElement("div");
    card.className = "player-card";

    card.innerHTML = `
      <div class="rating">${player.rating}</div>
      <div class="position">${player.position}</div>
      <img class="photo" src="${player.photo}" alt="${player.name}">
      <h2 class="name">${player.name}</h2>
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
    `;
    card.addEventListener("click", () => {
      const targetPositionButton = document.querySelector(`#${player.position.toLowerCase()}`);
    
      if (targetPositionButton) {
        // Check if the button already contains a player card
        if (targetPositionButton.querySelector(".player-card")) {
          // If there is already a player card, alert the user
          alert("A player is already assigned to this position.");
        } else {
          // Clear any existing content in the button
          targetPositionButton.innerHTML = "";
          rbbutton.classList.remove('cards-container')
          // Append the player card to the button
          targetPositionButton.appendChild(card);

          // Close the modal
          modal2.classList.add("hidden");
        }
      } else {
        alert(`No target button found for position: ${player.position}`);
      }
    });

    modal2.appendChild(card);
  });

  modal2.classList.remove("hidden");
});

const lbbutton = document.querySelector("#lb");

lbbutton.addEventListener("click", (e) => {
  e.stopPropagation();

  const finded = players.filter((plr) => plr.position === "LB");

  let modal2 = document.querySelector(".lb-modal");
  if (!modal2) {
    modal2 = document.createElement("div");
    modal2.className = "lb-modal";
    document.body.appendChild(modal2);
  }
  modal2.innerHTML = "";

  const closeButton = document.createElement("div");
  closeButton.className = "close-button";
  closeButton.innerHTML = "✖";
  closeButton.addEventListener("click", () => {
    modal2.classList.add("hidden");
  });
  modal2.appendChild(closeButton);

  finded.forEach(player => {
    const card = document.createElement("div");
    card.className = "player-card";

    card.innerHTML = `
      <div class="rating">${player.rating}</div>
      <div class="position">${player.position}</div>
      <img class="photo" src="${player.photo}" alt="${player.name}">
      <h2 class="name">${player.name}</h2>
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
    `;
    card.addEventListener("click", () => {
      const targetPositionButton = document.querySelector(`#${player.position.toLowerCase()}`);
    
      if (targetPositionButton) {
        // Check if the button already contains a player card
        if (targetPositionButton.querySelector(".player-card")) {
          // If there is already a player card, alert the user
          alert("A player is already assigned to this position.");
        } else {
          // Clear any existing content in the button
          targetPositionButton.innerHTML = "";
          lbbutton.classList.remove('cards-container')
          // Append the player card to the button
          targetPositionButton.appendChild(card);

          // Close the modal
          modal2.classList.add("hidden");
        }
      } else {
        alert(`No target button found for position: ${player.position}`);
      }
    });
    modal2.appendChild(card);
  });

  modal2.classList.remove("hidden");
});

const cmdbutton = document.querySelector("#cmd");

cmdbutton.addEventListener("click", (e) => {
  e.stopPropagation();

  const finded = players.filter((plr) => plr.position === "CMD");

  let modal2 = document.querySelector(".cmd-modal");
  if (!modal2) {
    modal2 = document.createElement("div");
    modal2.className = "cmd-modal";
    document.body.appendChild(modal2);
  }
  modal2.innerHTML = "";

  const closeButton = document.createElement("div");
  closeButton.className = "close-button";
  closeButton.innerHTML = "✖";
  closeButton.addEventListener("click", () => {
    modal2.classList.add("hidden");
  });
  modal2.appendChild(closeButton);

  finded.forEach(player => {
    const card = document.createElement("div");
    card.className = "player-card";

    card.innerHTML = `
      <div class="rating">${player.rating}</div>
      <div class="position">${player.position}</div>
      <img class="photo" src="${player.photo}" alt="${player.name}">
      <h2 class="name">${player.name}</h2>
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
    `;
    card.addEventListener("click", () => {
      const targetPositionButton = document.querySelector(`#${player.position.toLowerCase()}`);
    
      if (targetPositionButton) {
        // Check if the button already contains a player card
        if (targetPositionButton.querySelector(".player-card")) {
          // If there is already a player card, alert the user
          alert("A player is already assigned to this position.");
        } else {
          // Clear any existing content in the button
          targetPositionButton.innerHTML = "";
          cmdbutton.classList.remove('cards-container')
          // Append the player card to the button
          targetPositionButton.appendChild(card);

          // Close the modal
          modal2.classList.add("hidden");
        }
      } else {
        alert(`No target button found for position: ${player.position}`);
      }
    });

    modal2.appendChild(card);
  });

  modal2.classList.remove("hidden");
});

const cmlbutton = document.querySelector("#cml");

cmlbutton.addEventListener("click", (e) => {
  e.stopPropagation();

  const finded = players.filter((plr) => plr.position === "CML");

  let modal2 = document.querySelector(".cmd-modal");
  if (!modal2) {
    modal2 = document.createElement("div");
    modal2.className = "cml-modal";
    document.body.appendChild(modal2);
  }
  modal2.innerHTML = "";

  const closeButton = document.createElement("div");
  closeButton.className = "close-button";
  closeButton.innerHTML = "✖";
  closeButton.addEventListener("click", () => {
    modal2.classList.add("hidden");
  });
  modal2.appendChild(closeButton);

  finded.forEach(player => {
    const card = document.createElement("div");
    card.className = "player-card";

    card.innerHTML = `
      <div class="rating">${player.rating}</div>
      <div class="position">${player.position}</div>
      <img class="photo" src="${player.photo}" alt="${player.name}">
      <h2 class="name">${player.name}</h2>
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
    `;
    card.addEventListener("click", () => {
      const targetPositionButton = document.querySelector(`#${player.position.toLowerCase()}`);
    
      if (targetPositionButton) {
        // Check if the button already contains a player card
        if (targetPositionButton.querySelector(".player-card")) {
          // If there is already a player card, alert the user
          alert("A player is already assigned to this position.");
        } else {
          // Clear any existing content in the button
          targetPositionButton.innerHTML = "";
          cmlbutton.classList.remove('cards-container')
          // Append the player card to the button
          targetPositionButton.appendChild(card);

          // Close the modal
          modal2.classList.add("hidden");
        }
      } else {
        alert(`No target button found for position: ${player.position}`);
      }
    });

    modal2.appendChild(card);
  });

  modal2.classList.remove("hidden");
});

const cmrbutton = document.querySelector("#cmr");

cmrbutton.addEventListener("click", (e) => {
  e.stopPropagation();

  const finded = players.filter((plr) => plr.position === "CMR");

  let modal2 = document.querySelector(".cmr-modal");
  if (!modal2) {
    modal2 = document.createElement("div");
    modal2.className = "cmr-modal";
    document.body.appendChild(modal2);
  }
  modal2.innerHTML = "";

  const closeButton = document.createElement("div");
  closeButton.className = "close-button";
  closeButton.innerHTML = "✖";
  closeButton.addEventListener("click", () => {
    modal2.classList.add("hidden");
  });
  modal2.appendChild(closeButton);

  finded.forEach(player => {
    const card = document.createElement("div");
    card.className = "player-card";

    card.innerHTML = `
      <div class="rating">${player.rating}</div>
      <div class="position">${player.position}</div>
      <img class="photo" src="${player.photo}" alt="${player.name}">
      <h2 class="name">${player.name}</h2>
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
    `;

    // Add click event to move the card to its corresponding position
    card.addEventListener("click", () => {
      const targetPositionButton = document.querySelector(`#${player.position.toLowerCase()}`);
    
      if (targetPositionButton) {
        // Check if the button already contains a player card
        if (targetPositionButton.querySelector(".player-card")) {
          // If there is already a player card, alert the user
          alert("A player is already assigned to this position.");
        } else {
          // Clear any existing content in the button
          targetPositionButton.innerHTML = "";
          cmrbutton.classList.remove('cards-container')
          // Append the player card to the button
          targetPositionButton.appendChild(card);

          // Close the modal
          modal2.classList.add("hidden");
        }
      } else {
        alert(`No target button found for position: ${player.position}`);
      }
    });

    modal2.appendChild(card);
  });

  modal2.classList.remove("hidden");
});




const lwbutton = document.querySelector("#lw");

lwbutton.addEventListener("click", (e) => {
  e.stopPropagation();

  const finded = players.filter((plr) => plr.position === "LW");

  let modal2 = document.querySelector(".lw-modal");
  if (!modal2) {
    modal2 = document.createElement("div");
    modal2.className = "lw-modal";
    document.body.appendChild(modal2);
  }
  modal2.innerHTML = "";

  const closeButton = document.createElement("div");
  closeButton.className = "close-button";
  closeButton.innerHTML = "✖";
  closeButton.addEventListener("click", () => {
    modal2.classList.add("hidden");
  });
  modal2.appendChild(closeButton);

  finded.forEach(player => {
    const card = document.createElement("div");
    card.className = "player-card";

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
    `;

    card.addEventListener("click", () => {
      const targetPositionButton = document.querySelector(`#${player.position.toLowerCase()}`);
    
      if (targetPositionButton) {
        // Check if the button already contains a player card
        if (targetPositionButton.querySelector(".player-card")) {
          // If there is already a player card, alert the user
          alert("A player is already assigned to this position.");
        } else {
          // Clear any existing content in the button
          targetPositionButton.innerHTML = "";
          lwbutton.classList.remove('cards-container')
          // Append the player card to the button
          targetPositionButton.appendChild(card);

          // Close the modal
          modal2.classList.add("hidden");
        }
      } else {
        alert(`No target button found for position: ${player.position}`);
      }
    });
    modal2.appendChild(card);
  });

  

  modal2.classList.remove("hidden");

});

const rwbutton = document.querySelector("#rw");

rwbutton.addEventListener("click", (e) => {
  e.stopPropagation();

  const finded = players.filter((plr) => plr.position === "RW");

  let modal2 = document.querySelector(".rw-modal");
  if (!modal2) {
    modal2 = document.createElement("div");
    modal2.className = "rw-modal";
    document.body.appendChild(modal2);
  }
  modal2.innerHTML = "";

  const closeButton = document.createElement("div");
  closeButton.className = "close-button";
  closeButton.innerHTML = "✖";
  closeButton.addEventListener("click", () => {
    modal2.classList.add("hidden");
  });
  modal2.appendChild(closeButton);

  finded.forEach(player => {
    const card = document.createElement("div");
    card.className = "player-card";

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
    `;
    card.addEventListener("click", () => {
      const targetPositionButton = document.querySelector(`#${player.position.toLowerCase()}`);
    
      if (targetPositionButton) {
        // Check if the button already contains a player card
        if (targetPositionButton.querySelector(".player-card")) {
          // If there is already a player card, alert the user
          alert("A player is already assigned to this position.");
        } else {
          // Clear any existing content in the button
          targetPositionButton.innerHTML = "";
          rwbutton.classList.remove('cards-container')
          // Append the player card to the button
          targetPositionButton.appendChild(card);

          // Close the modal
          modal2.classList.add("hidden");
        }
      } else {
        alert(`No target button found for position: ${player.position}`);
      }
    });

    modal2.appendChild(card);
  });

  modal2.classList.remove("hidden");

});







