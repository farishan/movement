// question: harusnya renderer masukin ke game atau game masukin ke renderer?
// answer: sementara game yang dimasukin ke renderer

class Renderer {
  constructor(game){
    this.game = game
  }
  /*
   * Map Renderer
   *
   * player: this function need player.position
   * map: {width, length}
   * ui: DOM element
   */
  renderMap = function (ui){
    this.resetUI(ui)

    const { position } = this.game.player
    const { width, data } = this.game.map

    let counter = 0;
    for (let index = 0; index < data.length; index++) {
      const roomId = data[index];
      const span = document.createElement('span')

      if(index == position) {
        span.style.color = 'red'
      }

      if(counter === width-1){
        span.innerHTML += roomId+'<br>';
        counter = 0
      }else{
        span.innerHTML = roomId
        counter++;
      }

      ui.appendChild(span)
    }
  }

  resetUI = function (ui){
    ui.innerHTML = ''
  }
}