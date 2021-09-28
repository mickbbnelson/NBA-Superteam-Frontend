class PlayerApi {
    constructor(urlPort){
       this.urlPort = urlPort 
    }

    getPlayers(){
        fetch(this.urlPort + `/players`)
        .then(r => r.json())
        .then(data => console.log(data))
    }
}