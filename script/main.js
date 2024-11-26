// Path to the JSON file in the parent directory
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
    console.log( jsonData.players);
  })
  .catch(error => {
    console.error("Error loading the JSON file:", error);
  });
