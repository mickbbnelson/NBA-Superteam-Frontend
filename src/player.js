class Player {

    static all = [];

    constructor(id, {description, name, position, team_id}){
        this.id = id;
        this.description = description;
        this.name = name;
        this.position = position;
        this.team_id = team_id; // Need to create elements based on this object
        this.element = document.createElement('li');
        this.element.dataset['id'] = id;        //specific identifyer for each li element based on their id
        this .element.id = `player-${id}`
        Player.all.push(this)
        debugger
    }
}