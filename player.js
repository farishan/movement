/*
 * position: the character initial position, one of valid index on map
 */
class Character {
  constructor(position){
    this.position = position
  }

  move(newPosition) {
    this.position = newPosition
  }
}

// Usage: 4 is one of valid index on the map
var player = new Character(4)
