// The team score values
var team1Score = 0;
var team2Score = 0;


// Team score increase/decrease interval values
var teamScoreIncreaseInterval = 1;
var teamScoreDecreaseInterval = 1;


// Team score text elements
var team1ScoreText;
var team2ScoreText;


// Score adjustment buttons
// Element 0 = Team 1 button
// Element 1 = Team 2 button
var scoreIncreaseButtons = new Array(2);
var scoreDecreaseButtons = new Array(2);


// Initialize the page
function initialize()
{
    // Get document references
    getDocumentReferences();

    // Bind function calls
    bindFunctionCalls();
}

// Get document references
function getDocumentReferences()
{
    team1ScoreText = document.getElementById("Team1Score");
    team2ScoreText = document.getElementById("Team2Score");

    // Get the score adjustment buttons
    scoreIncreaseButtons[0] = document.getElementById("Team1ScoreIncreaseButton");
    scoreIncreaseButtons[1] = document.getElementById("Team2ScoreIncreaseButton");

    scoreDecreaseButtons[0] = document.getElementById("Team1ScoreDecreaseButton");
    scoreDecreaseButtons[1] = document.getElementById("Team2ScoreDecreaseButton");
}

// Bind function calls
function bindFunctionCalls()
{
    // Bind functions to the score adjustment buttons
    scoreIncreaseButtons[0].addEventListener("click", function(){ increaseTeamScoreValues(1); });
    scoreIncreaseButtons[1].addEventListener("click", function(){ increaseTeamScoreValues(2); });

    scoreDecreaseButtons[0].addEventListener("click", function(){ decreaseTeamScoreValues(1); });
    scoreDecreaseButtons[1].addEventListener("click", function(){ decreaseTeamScoreValues(2); });
}

// Increase team score values
// PARAM 1: The selected team
function increaseTeamScoreValues(teamSelected)
{
    if (teamSelected === 1)
    {
        // If the team 1 value is less than 999
        // Increase the team 1 score value
        if (team1Score < 999)
        {
            if ((team1Score + teamScoreIncreaseInterval) >= 999)
            {
                team1Score = 999;
            }

            else
            {
                team1Score += teamScoreIncreaseInterval;
            }
        }
        
        // If the team 1 score value is equal or greater than 999
        // Set the team 1 score value to be 999
        else if (team1Score >= 999)
        {
            team1Score = 999;
        } 

        team1ScoreText.innerHTML = team1Score;
    }

    else if (teamSelected === 2)
    {
        // If the team 2 value is less than 999
        // Increase the team 2 score value
        if (team2Score < 999)
        {
            if ((team2Score + teamScoreIncreaseInterval) >= 999)
            {
                team2Score = 999;
            }
            
            else
            {
                team2Score += teamScoreIncreaseInterval;
            }
        }

        // If the team 2 score value is equal or greater than 999
        // Set the team 2 score value to be 999
        else if (team2Score >= 999)
        {
            team2Score = 999;
        } 

        team2ScoreText.innerHTML = team2Score;
    }

    else
    {
        console.log("Invalid team selected");
    }
}

// Decrease team score values
// PARAM 1: The selected team
function decreaseTeamScoreValues(teamSelected)
{
    if (teamSelected === 1)
    {
        // If the team 1 score value is greater than -999
        // Decrease the team 1 score value
        if (team1Score > -999)
        {
            if ((team1Score - teamScoreDecreaseInterval) <= -999)
            {
                team1Score = -999;
            }

            else
            {
                team1Score -= teamScoreDecreaseInterval;
            }
        }

        // If the team 1 score value is equal or less than -999
        // Set the team 1 score value to be -999
        else if (team1Score <= -999)
        {
            team1Score = -999;
        }

        team1ScoreText.innerHTML = team1Score;
    }

    else if (teamSelected === 2)
    {
        // If the team 2 score value is greater than -999
        // Decrease the team 2 score value
        if (team2Score > -999)
        {
            if ((team2Score - teamScoreDecreaseInterval) <= -999)
            {
                team2Score = -999;
            }

            else
            {
                team2Score -= teamScoreDecreaseInterval;
            }
        }

        // If the team 2 score value is equal or less than -999
        // Set the team 2 score value to be -999
        else if (team2Score <= -999)
        {
            team2Score = -999;
        }

        team2ScoreText.innerHTML = team2Score;
    }

    else
    {
        console.log("Invalid team selected");
    }
}