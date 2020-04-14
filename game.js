/*
game needs:
player
rooms
map
*/
class Game {
  constructor(config){
    const { player, map, rooms } = config
    this.player = player
    this.map = map
    this.rooms = rooms
    this.currentRoom = {}
    this.currentExits = {}
  }

  update() {
    this.currentRoom = this.getCurrentRoom()
    this.currentExits = this.getCurrentExits()
  }

  getCurrentRoom() {
    return this.rooms[this.map.data[this.player.position]]
  }

  getCurrentExits() {
    const { width, data } = this.map
    const { position } = this.player

    let result = {}
    let direction = {
      n: position - width,
      ne: position - width + 1,
      e: position + 1,
      se: position + width + 1,
      s: position + width,
      sw: position + width - 1,
      w: position - 1,
      nw: position - width - 1
    }

    for (let k in direction) {
      if(data[direction[k]]){
        result[k] = direction[k]
      }else{
        result[k] = undefined
      }
    }

    return result
  }
}
