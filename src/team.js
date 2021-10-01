class Team {

    static all = [];
    static teamContainer = document.getElementById("team-list")

    constructor(id, name, roster){
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
        Team.all.push(this)
    }
    
    renderTeamLi(){    
        this.element.innerHTML = `
        <div data-id="${this.id}">
        <h3 class="tname">${this.name}</h3>
        <p class="troster">${this.roster.map(player => player.name)}</p>
        <button class="view-team" data-id=${this.id}>View Team Details</button>
        <button class="delete-team" data-id=${this.id}>Delete Team</button>
        </div>
        `
        return this.element
    }

    addTeamToDom(){
        Team.teamContainer.appendChild(this.renderTeamLi())
    }
}