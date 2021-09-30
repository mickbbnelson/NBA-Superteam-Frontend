class Team {

    static all = [];
    static teamContainer = document.getElementById("team-list")

    constructor(id, name, roster){
        this.id = id;
        this.name = name;
        this.roster = roster;
        this.element = document.createElement('li');
        this.element.dataset['id'] = id;        
        this.element.id = `team-${id}`
        Team.all.push(this)
    }

    renderTeamLi(){    
        this.element.innerHTML = `
        <div data-id="${this.id}">
        <h3 class="tname">${this.name}</h3>
        <h4 class="troster">${this.roster.map(player => player.name)}</h4>
        </div>
        `
        return this.element
    }

    addTeamToDom(){
        Team.teamContainer.appendChild(this.renderTeamLi())
    }


}