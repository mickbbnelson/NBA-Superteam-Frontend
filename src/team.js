class Team {

    static all = [];
    static teamContainer = document.getElementById("team-container")

    constructor(id, name, players){
        this.id = id;
        this.name = name;
        this.players = players;
        this.element = document.createElement('li');
        this.element.dataset['id'] = id;        
        this.element.id = `team-${id}`
        Team.all.push(this)
    }

    renderTeamLi(){    
        this.element.innerHTML = `
        <div data-id="${this.id}">
        <h3 class="tname">${this.name}</h3>
        <h4 class="tplayer">${this.players}</h4>
        </div>
        `
        return this.element
    }

    addTeamToDom(){
        Team.teamContainer.appendChild(this.renderTeamLi())
    }
}