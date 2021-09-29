const urlPort = `http://localhost:3000`;
const playerApiCall = new PlayerApi(urlPort);
const teamApiCall = new TeamApi(urlPort);

playerApiCall.getPlayers()

teamApiCall.getTeams()