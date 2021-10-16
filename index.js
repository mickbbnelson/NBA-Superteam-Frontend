const urlPort = `http://localhost:3000`;
const playerApiCall = new PlayerApi(urlPort);
const teamApiCall = new TeamApi(urlPort);
const teamForm = document.getElementById("team-form");
const nameValue = document.getElementById("team-name");
const playerForm = document.getElementById("player-form");
const playerNameValue = document.getElementById("player-name");
const playerPositionValue = document.getElementById("player-position");
const playerDescriptionValue = document.getElementById("player-description");
const teamDropdown = document.getElementById("dropdown");
const alphaButton = document.getElementById("Aplha")

playerApiCall.getPlayers();

teamApiCall.getTeams();

teamForm.addEventListener('submit', handleTeamSubmit);

function handleTeamSubmit(event){
    event.preventDefault();
    teamApiCall.createTeam();
    teamForm.reset();
}

playerForm.addEventListener('submit', handlePlayerSubmit)

function handlePlayerSubmit(event){
    event.preventDefault();
    playerApiCall.createPlayer();
    playerForm.reset();
}

alphaButton.addEventListener('click', function(){
    const sortedData = Team.all.sort((teamA, teamB) => {
        if (teamA.name < teamB.name) {
            return -1
        } else if (teamA.name > teamB.name) {
            return 1
        } else {
            return 0
        }
    })
    sortedData.map(function(team) {
        team.addTeamToDom()
    })
})
    

    //const teamCont = document.getElementById("team-list")
    //teamCont.innerHTML = 
    //sortedData.map(function(team) 
    //
