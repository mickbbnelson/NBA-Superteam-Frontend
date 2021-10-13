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
        .catch(error => {
            console.log(error.message)
            alert("Could not load teams")
        })
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
        .catch(error => {
            console.log(error.message)
            alert("Could not create team")
        }) 
    }

    deleteTeam(event){
        const id = event.target.dataset.id;
        const optionRemove = document.getElementById(`option-${id}`);
        const elementRemove = event.target.parentElement.parentElement
        const configObject = {method: 'DELETE'};
        fetch(this.urlPort + `/teams/${id}`, configObject)
        .then(r => this.renderJSON(r))
        .then(data => {
            alert(data.message);
            optionRemove.remove();
            elementRemove.remove();
            Player.all.map(function(player) {
            if (player.team_id == id) {
                const liRemove = document.getElementById(`player-${player.id}`)
                liRemove.remove()
            }})
        })
        .catch(error => {
            console.log(error.message)
            alert("Could not delete team")
        })
    }

    renderJSON(r) {
        if (!r.ok) {
            throw Error('HTTP Error/Could not process')
        } else {
        return r.json()}
    }
}