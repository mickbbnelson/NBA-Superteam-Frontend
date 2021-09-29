class TeamApi {
    constructor(urlPort){
        this.urlPort = urlPort 
    }

    getTeams(){
        fetch(this.urlPort + `/teams`)
        .then(r => r.json())
        .then(data => {
            const teamsData = data.data
            for(const team of teamsData){
                let newTeam = new Team(team.id, team.attributes.name)
                newTeam.addTeamToDom()
            }
        })
        .catch
    }
}