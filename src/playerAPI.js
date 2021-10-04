class PlayerApi {
    constructor(urlPort){
       this.urlPort = urlPort 
    }

    getPlayers(){
        fetch(this.urlPort + `/players`)
        .then(r => r.json())
        .then(data => {
            const playersData = data.data;
            for(const player of playersData){
            let newPlayer = new Player({id: player.id, ...player.attributes})
            newPlayer.addPlayerToDom()
        }
    })
    .catch
    }

    createPlayer(){
        let playerInfo = {
            player: {
                name: playerNameValue.value,
                position: playerPositionValue.value,
                description: playerDescriptionValue.value,
                team_id: teamDropdown.value
            }
        }
        const configObject = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(playerInfo)
        }
        fetch(this.urlPort + `/players`, configObject)
        .then(r => r.json())
        .then(data => {
            const newPlayer = new Player(data)
            newPlayer.addPlayerToDom()
        })
    }

    deletePlayer(event){

        event.preventDefault()
        const id = event.target.dataset.id
        event.target.parentElement.remove()
        const configObject = {method: 'DELETE'}
        fetch(this.urlPort + `/players/${id}`, configObject)
        .then(r => r.json())
        .then(data => alert(data.message))
    }

    //rerenderRoster(){
    //    set variable to correct team element
    //    push the new player into the roster array
    //    adjust the innerHTML of the roster UL by mapping through the roster again
    //}
}