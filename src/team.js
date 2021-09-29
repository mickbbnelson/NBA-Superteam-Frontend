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
}