class Team {

    static all = [];
    static teamContainer = document.getElementById("team-list")

    constructor({id, name, roster}){
        this.id = id;
        this.name = name;
        if(roster == undefined){
            this.roster = []
        }else{
            this.roster = roster
        }
        this.element = document.createElement('li');
        this.element.dataset['id'] = id;        
        this.element.id = `team-${id}`
        this.element.addEventListener('click', this.handleTeamClick)  //Automatically sets an event listener on each li element.
        Team.all.push(this)
    }
    
    renderTeamLi(){    
        this.element.innerHTML = `
        <div data-id="${this.id}" class="team-roster">
        <h3 class="tname">${this.name}</h3>
        <ul class="troster">${this.roster.map(player => `<li id=roster-${player.id}>${player.name} - ${player.position}: ${player.description}</li>`)}
        </ul><br>
        <button class="delete-team" data-id=${this.id}>Delete Team</button>
        </div>
        `
        return this.element
    }

    addTeamToDom(){
        Team.teamContainer.appendChild(this.renderTeamLi())
    }

    addTeamsToDropdown(){
        const option = document.createElement('option');
        option.id = `option-${this.id}`
        option.value = this.id;
        option.innerText = this.name;
        teamDropdown.appendChild(option);
    }

    handleTeamClick(event){
        if (event.target.innerText === "Delete Team"){
            teamApiCall.deleteTeam(event) 
        }
    }
}