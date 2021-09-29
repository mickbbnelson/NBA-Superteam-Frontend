class Team {

    static all = [];

    constructor(id, name, players){
        this.id = id;
        this.name = name;
        this.players = players;
        this.element = document.createElement('li');
        this.element.dataset['id'] = id;        
        this.element.id = `team-${id}`
        Team.all.push(this)
    }

    renderLi(){    
        this.element.innerHTML = `
        <div data-id="${this.id}">
        <h3 class="tname">${this.name}</h3>
        <h4 class="tposition">${this.position}</h4>
        <p class="tdescription">${this.description}</p>
        </div>
        `
        return this.element
    }
}