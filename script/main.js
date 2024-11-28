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
    const container = document.getElementById('card-container');
    players.forEach(player => {
      const card = document.createElement('div');
      card.className = 'player-card';
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
  })
  .catch(error => {
    console.error("Error loading the JSON file:", error);
  });

const buttonshow = document.querySelector("#showAllPlayersBtn");
const playercontainer = document.querySelector(".theall");
buttonshow.addEventListener("click", () => {
  playercontainer.classList.toggle("hidden");
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

    modal2.appendChild(card);
  });

  modal2.classList.remove("hidden");
});

const cmdbutton = document.querySelector("#cmd");

cmdbutton.addEventListener("click", (e) => {
  e.stopPropagation();

  const finded = players.filter((plr) => plr.position === "CDM");

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

    modal2.appendChild(card);
  });

  modal2.classList.remove("hidden");

});







