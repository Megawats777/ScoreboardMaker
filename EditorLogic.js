
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
    switch (EDITOR_scoreboardTitleFontControl.selectedIndex) {
        
        case 0:
            EDITOR_scoreboardTitleDisplay.style.fontFamily = "Oswald, sans-serif";
            break;

        case 1:
            EDITOR_scoreboardTitleDisplay.style.fontFamily = "Open Sans, sans-serif";
            break;

        case 2:
            EDITOR_scoreboardTitleDisplay.style.fontFamily = "Saira Semi Condensed, sans-serif";
            break;
    }
}