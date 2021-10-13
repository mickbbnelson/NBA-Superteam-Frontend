class TeamApi {
    constructor(urlPort){
        this.urlPort = urlPort 
    }

    getTeams(){
        fetch(this.urlPort + `/teams`)
        .then(r => this.renderJSON(r))
        .then(data => {
            const teamsData = data.data;
            for(const team of teamsData){
                const newTeam = new Team({id: team.id, ...team.attributes})
                newTeam.addTeamsToDropdown();
                newTeam.addTeamToDom();
            }
        })
        .catch(error => console.log(error.message))
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
        .then(r => this.renderJSON(r))
        .then(data => {
            const newTeam = new Team(data);
            newTeam.addTeamToDom();
            const newOption = document.createElement('option');
            newOption.id = `option-${newTeam.id}`;
            newOption.value = newTeam.id;
            newOption.innerText = newTeam.name;
            teamDropdown.appendChild(newOption);
        })
        .catch(error => console.log(error.message)) 
    }

    deleteTeam(event){
        const id = event.target.dataset.id;
        const optionRemove = document.getElementById(`option-${id}`);
        optionRemove.remove();
        Player.all.map(function(player) {
            if (player.team_id == id) {
                const liRemove = document.getElementById(`player-${player.id}`)
                liRemove.remove()
            }})
        event.target.parentElement.parentElement.remove();
        const configObject = {method: 'DELETE'};
        fetch(this.urlPort + `/teams/${id}`, configObject)
        .then(r => this.renderJSON(r))
        .then(data => alert(data.message))
        .catch(error => console.log(error.message))
    }

    renderJSON(r) {
        if (!r.ok) {
            throw Error('HTTP Error/Could not process')
        } else {
        return r.json()}
    }
}