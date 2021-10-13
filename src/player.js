class Player {

    static all = [];
    static playerList = document.getElementById("player-list")

    constructor({id, description, name, position, team_id, squad}){
        this.id = id;
        this.description = description;
        this.squad = squad;
        this.name = name;
        this.position = position;
        this.team_id = team_id; 
        this.element = document.createElement('li');
        this.element.dataset['id'] = id;        
        this.element.id = `player-${id}`;
        this.element.addEventListener('click', this.handlePlayerClick);
        Player.all.push(this);
    }

    renderPlayerLi(){ 
        this.element.innerHTML = `
        <div data-id="${this.id}">
        <h3 class="pname-position">Pick ${this.id} made by ${this.squad.name}: ${this.name}
        <button class="delete-player" data-id=${this.id}>Delete Player</button></h3>
        </div>
        `
        return this.element;
    }

    addPlayerToDom(){        
        Player.playerList.appendChild(this.renderPlayerLi())
    }

    handlePlayerClick(event){
        if (event.target.innerText === "Delete Player"){
        playerApiCall.deletePlayer(event)
        }
    }
}