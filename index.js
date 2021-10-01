const urlPort = `http://localhost:3000`;
const playerApiCall = new PlayerApi(urlPort);
const teamApiCall = new TeamApi(urlPort);
const form = document.getElementById("team-form")
const nameValue = document.getElementById("team-name")

playerApiCall.getPlayers()

teamApiCall.getTeams()

form.addEventListener('submit', handleSubmit)

function handleSubmit(event){
    event.preventDefault()
    teamApiCall.createTeam()
}