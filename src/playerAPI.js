class PlayerApi {
    constructor(urlPort){
       this.urlPort = urlPort 
    }

    getPlayers(){
        fetch(this.urlPort + `/players`)
        .then(r => r.json())
        .then(data => {
            const playersData = data.data;
            for(const player of playersData)
            let newPlayer = new Player(player.attributes)
        })
    }
}