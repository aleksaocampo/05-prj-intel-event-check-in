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
  const message = `🙌 Welcome, ${name} from ${teamName}`;
  const greeting = document.getElementById("greeting");
  greeting.textContent = message;

  // If 50 attendees reached, show celebratory message with top team
  if (count === 50) {
    // Get team counts
    const waterCount = parseInt(
      document.getElementById("waterCount").textContent
    );
    const zeroCount = parseInt(
      document.getElementById("zeroCount").textContent
    );
    const powerCount = parseInt(
      document.getElementById("powerCount").textContent
    );

    // Find the team with the most attendees
    let topTeam = "";
    let topTeamName = "";
    let max = waterCount;
    topTeam = "water";
    topTeamName = "Team Water Wise";
    if (zeroCount > max) {
      max = zeroCount;
      topTeam = "zero";
      topTeamName = "Team Net Zero";
    }
    if (powerCount > max) {
      max = powerCount;
      topTeam = "power";
      topTeamName = "Team Renewables";
    }

    greeting.textContent = `🎉 Attendance Reached! The top team is ${topTeamName} with ${max} attendees!`;
  }

  form.reset();
});
