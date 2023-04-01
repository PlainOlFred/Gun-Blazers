class Showdown {
    
  constructor(player, opponent) {
    this.player = player
    this.opponent = opponent
    this.turn = 0
    this.end = false
  }

  handleCharacterAttack() {

  }

  handleCharacterDefense() {
    
  }



  get _player() {
    return this.player
  }
  set _player(player) {
    this.player = player
  }

  get _opponent() {
    return this.opponent
  }
  set _opponent(player) {
    this.opponent = opponent
  }

  get _activeTurn() {
    if(this.turn % 2 === 0) {
      return this.player
    }

    if(this.turn % 2 === 0) {
      return this.opponent
    }
  }

  set _activeTurn(turn) {
    this.turn = turn
  }

  get _end() {
    return this.end
  }

  set _end(bool) {
    this.end = bool
  }




}


