// Team title div section reference and properties
var teamTitleDivRef;
var teamTitleDivDefaultTopPaddingValue;
var teamTitleDivSmallerTopPaddingValue = 2.5;

// The team score values
var team1Score = 0;
var team2Score = 0;


// Team score increase/decrease interval values
var teamScoreIncreaseInterval = 1;
var teamScoreDecreaseInterval = 1;


// Editor status variables
var isEditorVisible = false;

// Credits status variables
var isCreditsPanelVisible = false;

/*--Document element references--*/


// Team score text elements
var team1ScoreText;
var team2ScoreText;

var team1ScoreTextDefaultFontSize;
var team1ScoreTextSmallerFontSize = 120;

var team2ScoreTextDefaultFontSize;
var team2ScoreTextSmallerFontSize = 120;

// Score adjustment buttons
// Element 0 = Team 1 button
// Element 1 = Team 2 button
var scoreIncreaseButtons = new Array(2);
var scoreDecreaseButtons = new Array(2);
var resetScoreValueButton;

// Overhead buttons
var customizeButton;
var creditsButton;

// Editor panel properties
var editorPanelRef;

// Credits panel properties
var creditsPanelRef;

// When the page loads
// Call the initialize function
window.onload = function () {
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

    // showEditor();

    // Hide the credits panel
    hideCreditsPanel();


    // Set the default font size for the score text elements
    var styleSheetFontSize = window.getComputedStyle(team1ScoreText, null).getPropertyValue("font-size");
    team1ScoreTextDefaultFontSize = parseFloat(styleSheetFontSize);

    styleSheetFontSize = window.getComputedStyle(team2ScoreText, null).getPropertyValue("font-size");
    team2ScoreTextDefaultFontSize = parseFloat(styleSheetFontSize);


    // Set the default top padding value for the team title div reference
    var styleSheetTopPaddingVal = window.getComputedStyle(teamTitleDivRef, null).getPropertyValue("padding-top");
    teamTitleDivDefaultTopPaddingValue = parseFloat(styleSheetTopPaddingVal);
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



    // Get the overhead buttons
    customizeButton = document.getElementById("CustomizeButton");
    resetScoreValueButton = document.getElementById("ResetScoreValueButton");
    creditsButton = document.getElementById("CreditsButton");

    // Get the editor panel
    editorPanelRef = document.getElementById("EditorPanel");

    // Get the credits panel
    creditsPanelRef = document.getElementById("CreditsPanel");

    // Get the team title div reference
    teamTitleDivRef = document.getElementById("TeamTitles");
}

// Bind function calls
function bindFunctionCalls() {

    // Bind functions to the score adjustment buttons
    scoreIncreaseButtons[0].addEventListener("click", function () { increaseTeamScoreValues(1); });
    scoreIncreaseButtons[1].addEventListener("click", function () { increaseTeamScoreValues(2); });

    scoreDecreaseButtons[0].addEventListener("click", function () { decreaseTeamScoreValues(1); });
    scoreDecreaseButtons[1].addEventListener("click", function () { decreaseTeamScoreValues(2); });


    // Bind functions to the overhead buttons
    customizeButton.addEventListener("click", function () {
        toggleEditorVisibility();
        document.activeElement.blur();
    });

    resetScoreValueButton.addEventListener("click", function () {
        resetTeamScoreValues();
        document.activeElement.blur();
    });

    creditsButton.addEventListener("click", function () {
        toggleCreditsPanelVisibility();
        document.activeElement.blur();
    });
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
function toggleEditorVisibility() {
    // If the editor is visible
    // Hide the editor
    if (isEditorVisible === true) {
        hideEditor();
    }

    // If the editor is not visible
    // Show the editor
    else if (isEditorVisible === false) {
        showEditor();
    }
}

// Hide the editor
function hideEditor() {
    customizeButton.innerHTML = "Customize";
    isEditorVisible = false;

    editorPanelRef.style.bottom = "-500px";

    // Restore scoreboard content sizes
    restoreScoreboardContentSizes();
}

// Show the editor
function showEditor() {
    customizeButton.innerHTML = "Hide Customize Menu";
    isEditorVisible = true;

    editorPanelRef.style.bottom = "0px";

    // Hide the credits panel
    hideCreditsPanel();

    // Shrink the scoreboard contents
    shrinkScoreboardContents();
}

// Toggle credits panel visibility
function toggleCreditsPanelVisibility() {

    // If the credits panel is visible
    // Hide the credits panel
    if (isCreditsPanelVisible === true) {
        hideCreditsPanel();
    }

    // If the credits panel is not visible
    // Show the credits panel
    else if (isCreditsPanelVisible === false) {
        showCreditsPanel();
    }
}

// Show the credits panel
function showCreditsPanel() {

    isCreditsPanelVisible = true;
    creditsButton.innerHTML = "Hide Credits";

    creditsPanelRef.style.bottom = "0px";

    // Hide the editor
    hideEditor();

    // Shrink the scoreboard contents
    shrinkScoreboardContents();
}

// Hide the credits panel
function hideCreditsPanel() {

    isCreditsPanelVisible = false;
    creditsButton.innerHTML = "Credits";

    creditsPanelRef.style.bottom = "-500px";

    // Restore scoreboard content sizes
    restoreScoreboardContentSizes();
}

// Shrink the scoreboard contents
function shrinkScoreboardContents() {

    // Set the size of the team score elements to be their smaller values
    team1ScoreText.style.fontSize = team1ScoreTextSmallerFontSize + "px";
    team2ScoreText.style.fontSize = team2ScoreTextSmallerFontSize + "px";

    // Set the top padding val of the team title div ref to be
    // the smaller value
    teamTitleDivRef.style.paddingTop = teamTitleDivSmallerTopPaddingValue + "px";
}


// Restore scoreboard content sizes
function restoreScoreboardContentSizes() {

    // Set the size of the team score elements to be their default values
    team1ScoreText.style.fontSize = team1ScoreTextDefaultFontSize + "px";
    team2ScoreText.style.fontSize = team2ScoreTextDefaultFontSize + "px";

    // Set the top padding val of the team title div ref to be
    // the smaller value
    teamTitleDivRef.style.paddingTop = teamTitleDivDefaultTopPaddingValue + "px";
}