const urlPort = `http://localhost:3000`;
const playerApiCall = new PlayerApi(urlPort);
const teamApiCall = new TeamApi(urlPort);
const teamForm = document.getElementById("team-form")
const nameValue = document.getElementById("team-name")
const playerForm = document.getElementById("player-form")
const playerNameValue = document.getElementById("player-name")
const playerPositionValue = document.getElementById("player-position")
const playerDescriptionValue = document.getElementById("player-description")
const teamDropdown = document.getElementById("dropdown")

playerApiCall.getPlayers()

teamApiCall.getTeams()

teamForm.addEventListener('submit', handleTeamSubmit)

function handleTeamSubmit(event){
    event.preventDefault()
    teamApiCall.createTeam()
    teamForm.reset()
}

playerForm.addEventListener('submit', handlePlayerSubmit)

function handlePlayerSubmit(event){
    event.preventDefault()
    playerApiCall.createPlayer()
}
