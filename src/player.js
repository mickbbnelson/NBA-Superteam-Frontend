class Player {

    static all = [];
    static playerContainer = document.getElementById("player-container")

    constructor(id, {description, name, position, team_id}){
        this.id = id;
        this.description = description;
        this.name = name;
        this.position = position;
        this.team_id = team_id; // Need to create elements based on this object
        this.element = document.createElement('li');
        this.element.dataset['id'] = id;        //specific identifyer for each li element based on their id
        this.element.id = `player-${id}`
        Player.all.push(this)
    }

    renderLi(){         //No need to pass an argument through
        this.element.innerHTML = `
        <div data-id="${this.id}">
        <h3 class="pname">${this.name}</h3>
        <h4 class="pposition">${this.position}</h4>
        <p class="pdescription">${this.description}</p>
        </div>
        `
        return this.element
    }

    addToDom(){         //Need to call static variables on the entire class
        Player.playerContainer.appendChild(this.renderLi())
    }
}