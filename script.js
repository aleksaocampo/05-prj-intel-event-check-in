// Get all needed DOM elements
const form = document.getElementById("checkInForm"); // ID: checkInForm found in html
const teamSelect = document.getElementById("teamSelect");
const nameInput = document.getElementById("attendeeName");

// track attendance
let count = 0;
const maxCount = 50;

// Handle form submission using browser's event listeners
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // get form values
  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;

  console.log(name, team, teamName);

  // increment count
  count++;
  console.log("Total check-ins: ", count);

  // update attendee count
  const attendeeCount = document.getElementById("attendeeCount");
  attendeeCount.textContent = count;

  // update progress bar
  const percentage = Math.round((count / maxCount) * 100) + "%";
  console.log(`Progress: ${percentage}`);
  const progress = document.getElementById("progressBar");
  progress.style.width = percentage;

  // update team counter
  let teamCounter = document.getElementById(team + "Count");
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

  // show welcome message
  const message = `Welcome, ${name} from ${teamName}`;
  const greeting = document.getElementById("greeting");
  greeting.textContent = message;

  form.reset();
});
