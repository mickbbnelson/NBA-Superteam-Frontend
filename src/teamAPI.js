class TeamApi {
    constructor(urlPort){
        this.urlPort = urlPort 
    }

    getTeams(){
        fetch(this.urlPort + `/teams`)
        .then(r => r.json())
        .then(data => console.log(data))
    }
}