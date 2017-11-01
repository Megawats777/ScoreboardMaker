// The team score values
var team1Score = 0;
var team2Score = 0;


// Team score increase/decrease interval values
var teamScoreIncreaseInterval = 1;
var teamScoreDecreaseInterval = 1;


// Editor status variables
var isEditorVisible = false;


/*--Document element references--*/

// Team score text elements
var team1ScoreText;
var team2ScoreText;


// Score adjustment buttons
// Element 0 = Team 1 button
// Element 1 = Team 2 button
var scoreIncreaseButtons = new Array(2);
var scoreDecreaseButtons = new Array(2);
var resetScoreValueButton;

// Overhead buttons
var customizeButton;


// The editor panel
var editorPanel;

// When the page loads
// Call the initialize function
window.onload = function(){
    initialize();

    // Initialize the editor logic script
    EDITOR_initialize();
};


// Initialize the page
function initialize() {

    // Get document references
    getDocumentReferences();

    // Bind function calls
    bindFunctionCalls();

    // Hide the editor
    hideEditor();

    //showEditor();

    
}

// Get document references
function getDocumentReferences() {

    team1ScoreText = document.getElementById("Team1Score");
    team2ScoreText = document.getElementById("Team2Score");

    // Get the score adjustment buttons
    scoreIncreaseButtons[0] = document.getElementById("Team1ScoreIncreaseButton");
    scoreIncreaseButtons[1] = document.getElementById("Team2ScoreIncreaseButton");

    scoreDecreaseButtons[0] = document.getElementById("Team1ScoreDecreaseButton");
    scoreDecreaseButtons[1] = document.getElementById("Team2ScoreDecreaseButton");

    resetScoreValueButton = document.getElementById("ResetScoreValueButton");


    // Get the overhead buttons
    customizeButton = document.getElementById("CustomizeButton");


    // Get the editor panel
    editorPanel = document.getElementById("EditorPanel");
}

// Bind function calls
function bindFunctionCalls() {

if (scoreIncreaseButtons[0] == null)
    alert("Help");

    // Bind functions to the score adjustment buttons
    scoreIncreaseButtons[0].addEventListener("click", function () { increaseTeamScoreValues(1); });
    scoreIncreaseButtons[1].addEventListener("click", function () { increaseTeamScoreValues(2); });

    scoreDecreaseButtons[0].addEventListener("click", function () { decreaseTeamScoreValues(1); });
    scoreDecreaseButtons[1].addEventListener("click", function () { decreaseTeamScoreValues(2); });

    resetScoreValueButton.addEventListener("click", function () { resetTeamScoreValues(); });


    // Bind functions to the overhead buttons
    customizeButton.addEventListener("click", function() { toggleEditorVisibility(); });
}

// Increase team score values
// PARAM 1: The selected team
function increaseTeamScoreValues(teamSelected) {
    
    if (teamSelected === 1) {
        
        // If the team 1 value is less than 999
        // Increase the team 1 score value
        if (team1Score < 999) {
            if ((team1Score + teamScoreIncreaseInterval) >= 999) {
                team1Score = 999;
            }

            else {
                team1Score += teamScoreIncreaseInterval;
            }
        }

        // If the team 1 score value is equal or greater than 999
        // Set the team 1 score value to be 999
        else if (team1Score >= 999) {
            team1Score = 999;
        }

        updateTeamScoreDisplayElements(1);
    }

    else if (teamSelected === 2) {
        
        // If the team 2 value is less than 999
        // Increase the team 2 score value
        if (team2Score < 999) {
            if ((team2Score + teamScoreIncreaseInterval) >= 999) {
                team2Score = 999;
            }

            else {
                team2Score += teamScoreIncreaseInterval;
            }
        }

        // If the team 2 score value is equal or greater than 999
        // Set the team 2 score value to be 999
        else if (team2Score >= 999) {
            team2Score = 999;
        }

        updateTeamScoreDisplayElements(2);
    }

    else {
        console.log("Invalid team selected");
    }
}

// Decrease team score values
// PARAM 1: The selected team
function decreaseTeamScoreValues(teamSelected) {
    
    if (teamSelected === 1) {
        
        // If the team 1 score value is greater than -999
        // Decrease the team 1 score value
        if (team1Score > -999) {
            if ((team1Score - teamScoreDecreaseInterval) <= -999) {
                team1Score = -999;
            }

            else {
                team1Score -= teamScoreDecreaseInterval;
            }
        }

        // If the team 1 score value is equal or less than -999
        // Set the team 1 score value to be -999
        else if (team1Score <= -999) {
            team1Score = -999;
        }

        updateTeamScoreDisplayElements(1);
    }

    else if (teamSelected === 2) {
        
        // If the team 2 score value is greater than -999
        // Decrease the team 2 score value
        if (team2Score > -999) {
            if ((team2Score - teamScoreDecreaseInterval) <= -999) {
                team2Score = -999;
            }

            else {
                team2Score -= teamScoreDecreaseInterval;
            }
        }

        // If the team 2 score value is equal or less than -999
        // Set the team 2 score value to be -999
        else if (team2Score <= -999) {
            team2Score = -999;
        }

        updateTeamScoreDisplayElements(2);
    }

    else {
        console.log("Invalid team selected");
    }
}

// Set the score value of both teams to be 0
function resetTeamScoreValues() {

    team1Score = 0;
    team2Score = 0;

    updateTeamScoreDisplayElements(1);
    updateTeamScoreDisplayElements(2);
}

// Update team score display elements
// PARAM 1: The team display element to update
function updateTeamScoreDisplayElements(selectedTeam) {
    
    // Depending on the selected team
    // Update their display elements
    switch (selectedTeam) {

        case 1:
            team1ScoreText.innerHTML = team1Score;
            break;

        case 2:
            team2ScoreText.innerHTML = team2Score;
            break;

        default:
            console.log("Invalid Team Selected");
            break;
    }
}

// Toggle the visiblity of the editor
function toggleEditorVisibility()
{
    // If the editor is visible
    // Hide the editor
    if (isEditorVisible === true)
    {
        hideEditor();
        customizeButton.innerHTML = "Customize";
        isEditorVisible = false;
    }

    // If the editor is not visible
    // Show the editor
    else if (isEditorVisible === false)
    {
        showEditor();
        customizeButton.innerHTML = "Hide Customize Menu";
        isEditorVisible = true;
    }
}

// Hide the editor
function hideEditor()
{
    editorPanel.style.bottom = "-500px";
}

// Show the editor
function showEditor()
{
    editorPanel.style.bottom = "0px";
}