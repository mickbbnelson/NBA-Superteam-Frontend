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
                const newTeam = new Team(team.id, team.attributes.name, team.attributes.roster)
                newTeam.addTeamToDom()
            }
        })
        .catch
    }

    createTeam(){
        const teamInfo = {
            team: {
                name: nameValue.value
            }
        }
        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(teamInfo)
        }
        fetch(this.urlPort + `/teams`)
        .then(r => r.json())
        .then(data => {
            const newTeam = new Team(data)
            newTeam.addTeamToDom()
        })
    }
}