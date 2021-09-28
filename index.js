const urlPort = `http://localhost:3000`;
const playerApiCall = new PlayerApi(urlPort);

playerApiCall.getPlayers()