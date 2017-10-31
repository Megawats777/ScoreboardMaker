
// Title control elements
var scoreboardTitleInput;
var team1TitleInput;
var team2TitleInput;

// Initialize the editor
function EDITOR_initialize()
{
    // Get document references
    getDocumentReferences();
    
    // Bind functions
    EDITOR_bindFunctionCalls();
}

// Get document references
function getDocumentReferences()
{
    // Get the title control elements
    scoreboardTitleInput = document.getElementById("ScoreboardTitleInput");
    team1TitleInput = document.getElementById("Team1TitleInput");
    team2TitleInput = document.getElementById("Team2TitleInput");
}

// Bind functions
function EDITOR_bindFunctionCalls()
{

}