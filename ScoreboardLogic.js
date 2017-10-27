// The team score values
var team1Score = 0;
var team2Score = 0;

// Document references
var team1ScoreText;
var team2ScoreText;

// Initialize the page
function initialize()
{
    // Get document references
    getDocumentReferences();
}

// Get document references
function getDocumentReferences()
{
    team1ScoreText = document.getElementById("Team1Score");
    team2ScoreText = document.getElementById("Team2Score");
}

// Increase team score values
// PARAM 1: The selected team
function increaseTeamScoreValues(teamSelected)
{
    if (teamSelected == 1)
    {
        // If the team 1 value is less than 99
        // Increase the team 1 score value
        if (team1Score < 999)
        {
            team1Score++;
            team1ScoreText.innerHTML = team1Score;
        }
    }

    else if (teamSelected == 2)
    {
        // If the team 2 value is less than 99
        // Increase the team 2 score value
        if (team2Score < 999)
        {
            team2Score++;
            team2ScoreText.innerHTML = team2Score;
        }
    }

    else
    {
        console.log("Invalid team selected");
    }
}