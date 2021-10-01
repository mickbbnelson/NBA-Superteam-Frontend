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
                const newTeam = new Team({id: team.id, ...team.attributes})
                newTeam.addTeamsToDropdown()
                newTeam.addTeamToDom()
            }
        })
        .catch
    }

    createTeam(){
        let teamInfo = {
            team: {
                name: nameValue.value
            }
        }
        const configObject = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(teamInfo)
        }
        fetch(this.urlPort + `/teams`, configObject)
        .then(r => r.json())
        .then(data => {
            const newTeam = new Team(data)
            newTeam.addTeamToDom()
        })
    }
}