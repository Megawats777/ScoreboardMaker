/*
Creator: James Daniel Semilla
Date: November 9, 2017
File type: JS
Desc: Handles the logic and functionality of the editor. Makes the user's inputs
      do something with the scoreboard :)
*/


// Reference to background
var EDITOR_scoreboardBackgroundRef;

/*--Title elements category--*/


// Title control elements
var EDITOR_scoreboardTitleInput;
var EDITOR_team1TitleInput;
var EDITOR_team2TitleInput;

// Title display elements
var EDITOR_scoreboardTitleDisplay;
var EDITOR_team1TitleDisplay;
var EDITOR_team2TitleDisplay;

/*--Title elements category end--*/



/*--Font Control Properties--*/

// Font style identifiers
var EDITOR_OswaldFontID = "Oswald, sans-serif";
var EDITOR_OpenSansFontID = "Open Sans, sans-serif";
var EDITOR_SairaSemiCondensedFontID = "Saira Semi Condensed, sans-serif";

// Font dropdown controls
var EDITOR_scoreboardTitleFontControl;
var EDITOR_team1FontControl;
var EDITOR_team2FontControl;
var EDITOR_scoreFontControl;


/*--Font Control Properties End--*/


/*--Appearance Control Properties-*/

// Colour Theme Control Properties
var EDITOR_colourThemeControl;


/*--Appearance Control Properties End-*/


/*--Score interval control properties--*/

var EDITOR_scoreIncreaseIntervalControl;
var EDITOR_scoreDecreaseIntervalControl;

/*--Score interval control properties end--*/

// Initialize the editor
function EDITOR_initialize() {

    // Get document references
    EDITOR_getDocumentReferences();

    // Set the default values for the controls
    EDITOR_setDefaultControlValues();

    // Bind functions
    EDITOR_bindFunctionCalls();
}

// Get document references
function EDITOR_getDocumentReferences() {

    // Get the scoreboard background reference
    EDITOR_scoreboardBackgroundRef = document.getElementById("ScoreboardBackground");

    // Get the title control elements
    EDITOR_scoreboardTitleInput = document.getElementById("ScoreboardTitleInput");
    EDITOR_team1TitleInput = document.getElementById("Team1TitleInput");
    EDITOR_team2TitleInput = document.getElementById("Team2TitleInput");

    // Get title display elements
    EDITOR_scoreboardTitleDisplay = document.getElementById("ScoreboardTitle");
    EDITOR_team1TitleDisplay = document.getElementById("Team1Title");
    EDITOR_team2TitleDisplay = document.getElementById("Team2Title");

    // Get the font control elements
    EDITOR_scoreboardTitleFontControl = document.getElementById("ScoreboardTitleFontControl");
    EDITOR_scoreFontControl = document.getElementById("ScoreFontControl");
    EDITOR_team1FontControl = document.getElementById("team1FontControl");
    EDITOR_team2FontControl = document.getElementById("team2FontControl");

    // Get appearance control elements
    EDITOR_colourThemeControl = document.getElementById("ColourThemeControl");

    // Get the score interval control elements
    EDITOR_scoreIncreaseIntervalControl = document.getElementById("ScoreIncreaseIntervalControl");
    EDITOR_scoreDecreaseIntervalControl = document.getElementById("ScoreDecreaseIntervalControl");
}

// Set the default values for the controls
function EDITOR_setDefaultControlValues() {

    // Set the default values for the title control elements
    EDITOR_scoreboardTitleInput.value = EDITOR_scoreboardTitleDisplay.innerHTML;
    EDITOR_team1TitleInput.value = EDITOR_team1TitleDisplay.innerHTML;
    EDITOR_team2TitleInput.value = EDITOR_team2TitleDisplay.innerHTML;
}

// Bind functions
function EDITOR_bindFunctionCalls() {

    // Bind functions to the title controls
    EDITOR_scoreboardTitleInput.oninput = function () { EDITOR_applyTitleDisplayChanges(); };
    EDITOR_team1TitleInput.oninput = function () { EDITOR_applyTitleDisplayChanges(); };
    EDITOR_team2TitleInput.oninput = function () { EDITOR_applyTitleDisplayChanges(); };


    // Bind functions to the font controls
    EDITOR_scoreboardTitleFontControl.onchange = function () { EDITOR_applyFontChanges(); };
    EDITOR_scoreFontControl.onchange = function () { EDITOR_applyFontChanges(); };
    EDITOR_team1FontControl.onchange = function () { EDITOR_applyFontChanges(); };
    EDITOR_team2FontControl.onchange = function () { EDITOR_applyFontChanges(); };


    // Bind functions to the appearance controls
    EDITOR_colourThemeControl.onchange = function () { EDITOR_applyColourThemeChanges(); };


    // Bind functions to the score interval controls
    EDITOR_scoreIncreaseIntervalControl.onchange = function () { EDITOR_applyScoreIntervalChanges(); };
    EDITOR_scoreDecreaseIntervalControl.onchange = function () { EDITOR_applyScoreIntervalChanges(); };
}

// Apply changes to title display elements
function EDITOR_applyTitleDisplayChanges() {

    EDITOR_scoreboardTitleDisplay.innerHTML = EDITOR_scoreboardTitleInput.value;
    EDITOR_team1TitleDisplay.innerHTML = EDITOR_team1TitleInput.value;
    EDITOR_team2TitleDisplay.innerHTML = EDITOR_team2TitleInput.value;
}

// Apply font changes
function EDITOR_applyFontChanges() {

    // Check for what font was selected for the scoreboard title
    // Depending on the selected option set the font of that title
    EDITOR_setTextFontFromDropdownList(EDITOR_scoreboardTitleFontControl.selectedIndex, EDITOR_scoreboardTitleDisplay);


    // Check for what font was selected for the score text elements
    // Depending on the selected option set the font of that title
    EDITOR_setTextFontFromDropdownList(EDITOR_scoreFontControl.selectedIndex, team1ScoreText);
    EDITOR_setTextFontFromDropdownList(EDITOR_scoreFontControl.selectedIndex, team2ScoreText);


    // Check for what font was selected for the team title elements
    // Depending on the selected option set the font of that title
    EDITOR_setTextFontFromDropdownList(EDITOR_team1FontControl.selectedIndex, EDITOR_team1TitleDisplay);
    EDITOR_setTextFontFromDropdownList(EDITOR_team2FontControl.selectedIndex, EDITOR_team2TitleDisplay);
}

// Set the font for text elements based on dropdowns
// PARAM 1: The font selection num from the dropdown lists
// PARAM 2: The text element to be edited
function EDITOR_setTextFontFromDropdownList(selectionNum, editedTextElement) {

    switch (selectionNum) {

        case 0:
            editedTextElement.style.fontFamily = "Oswald, sans-serif";
            break;

        case 1:
            editedTextElement.style.fontFamily = "Open Sans, sans-serif";
            break;

        case 2:
            editedTextElement.style.fontFamily = "Saira Semi Condensed, sans-serif";
            break;

        case 3:
            editedTextElement.style.fontFamily = "Roboto Slab, serif";
            break;

        case 4:
            editedTextElement.style.fontFamily = "Indie Flower, cursive";
            break;

        case 5:
            editedTextElement.style.fontFamily = "Lobster, cursive";
            break;

        default:
            editedTextElement.style.fontFamily = "Oswald, sans-serif";
            break;
    }

}

// Apply colour theme changes
function EDITOR_applyColourThemeChanges() {

    var selectedBackgroundColour;
    var selectedTextColour;
    var selectedButtonBorderColour;


    // Depending on the theme selected
    // Set the selected background, text, and border button colours
    switch (EDITOR_colourThemeControl.selectedIndex) {

        // Light theme selection
        case 0:
            selectedBackgroundColour = "white";
            selectedTextColour = "rgba(51, 51, 51, 1)";
            selectedButtonBorderColour = "black"
            break;

        // Dark theme selection
        case 1:
            selectedBackgroundColour = "rgba(40, 40, 40, 1)";
            selectedTextColour = "#2196F3";
            selectedButtonBorderColour = "#2196F3";
            break;

        // Amber theme selection
        case 2:
            selectedBackgroundColour = "rgba(40, 40, 40, 1)";
            selectedTextColour = "#F57F17";
            selectedButtonBorderColour = "#F57F17";
            break;

        // Runner Red theme selection
        case 3:
            selectedBackgroundColour = "white";
            selectedTextColour = "#B71C1C";
            selectedButtonBorderColour = "#B71C1C";
            break;

        // American Diner theme selection
        case 4:
            selectedBackgroundColour = "#00897B";
            selectedTextColour = "white";
            selectedButtonBorderColour = "#F06292";
            break;

        // Icarus theme selection
        case 5:
            selectedBackgroundColour = "#F06292";
            selectedTextColour = "#FAFAFA";
            selectedButtonBorderColour = "rgba(51, 51, 51, 1)";
            break;

        default:
            selectedBackgroundColour = "white";
            selectedTextColour = "rgba(51, 51, 51, 1)";
            selectedButtonBorderColour = "black"
            break;
    }


    // Apply the selected colours
    // to the background, scoreboard colours, team titles, score text
    // elements, and button borders
    EDITOR_scoreboardBackgroundRef.style.background = selectedBackgroundColour;
    EDITOR_scoreboardTitleDisplay.style.color = selectedTextColour;
    EDITOR_team1TitleDisplay.style.color = selectedTextColour;
    EDITOR_team2TitleDisplay.style.color = selectedTextColour;
    team1ScoreText.style.color = selectedTextColour;
    team2ScoreText.style.color = selectedTextColour;

    for (var i = 0; i < scoreIncreaseButtons.length; i++) {
        scoreIncreaseButtons[i].style.borderColor = selectedButtonBorderColour;
    }

    for (var i = 0; i < scoreDecreaseButtons.length; i++) {
        scoreDecreaseButtons[i].style.borderColor = selectedButtonBorderColour;
    }
}

// Apply score interval changes
function EDITOR_applyScoreIntervalChanges() {

    // Depending on the selected increase interval rate
    // Set the score increase rate
    switch (EDITOR_scoreIncreaseIntervalControl.selectedIndex) {

        case 0:
            teamScoreIncreaseInterval = 1;
            break;

        case 1:
            teamScoreIncreaseInterval = 5;
            break;

        case 2:
            teamScoreIncreaseInterval = 10;
            break;

        case 3:
            teamScoreIncreaseInterval = 15;
            break;

        case 4:
            teamScoreIncreaseInterval = 20;
            break;

        case 5:
            teamScoreIncreaseInterval = 25;
            break;

        case 6:
            teamScoreIncreaseInterval = 30;
            break;

        case 7:
            teamScoreIncreaseInterval = 100;
            break;

        default:
            teamScoreIncreaseInterval = 1;
            break;
    }

    // Depending on the selected decrease interval rate
    // Set the score decrease rate
    switch (EDITOR_scoreDecreaseIntervalControl.selectedIndex) {

        case 0:
            teamScoreDecreaseInterval = 1;
            break;

        case 1:
            teamScoreDecreaseInterval = 5;
            break;

        case 2:
            teamScoreDecreaseInterval = 10;
            break;

        case 3:
            teamScoreDecreaseInterval = 15;
            break;

        case 4:
            teamScoreDecreaseInterval = 20;
            break;

        case 5:
            teamScoreDecreaseInterval = 25;
            break;

        case 6:
            teamScoreDecreaseInterval = 30;
            break;

        case 7:
            teamScoreDecreaseInterval = 100;
            break;

        default:
            teamScoreDecreaseInterval = 1;
            break;
    }

}