
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
}

// Apply changes to title display elements
function EDITOR_applyTitleDisplayChanges() {

    EDITOR_scoreboardTitleDisplay.innerHTML = EDITOR_scoreboardTitleInput.value;
    EDITOR_team1TitleDisplay.innerHTML = EDITOR_team1TitleInput.value;
    EDITOR_team2TitleDisplay.innerHTML = EDITOR_team2TitleInput.value;
}
