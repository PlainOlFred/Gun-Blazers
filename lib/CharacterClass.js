class Character {
    
  constructor(name, hp, attack, defense, coin) {
    this.name = name;
    this.hp = hp
    this.attack = attack;
    this.defense = defense;
    this.coin = coin;
    this.inventory = []
    this.equippedWeapon= null
    this.equippedAmour= null
  }

  purchase(item) {
    if(item.price > this.coin) {
      console.log('not enough money') // TODO handle insuff funds
      return
    } 

    this.coin = this.coin - item.price

    this.inventory.push(item.name) // TODO push Item objects
  }

  attack() {
    // TODO roll die and attack logic return modified attack
    // TODO account for weapon bouns
    // TODO Crtitial Attack
    // TODO Missed Attack -> return 0, 
    return this.attack
  }

  defend(attackPoints) {
    // TODO roll die and attack logic return modified defense
    // TODO account for armor bouns
    return this.defense
  }

  equippAmour(armour) {
    this.equippedAmour = armour
  }

  equippAmour(weapon) {
    this.equippedWeapon = weapon
  }






  




}

// Sharpshooter
class Sharpshooter extends Character {
  constructor(name, hp, attack, defense, coin ) {
    super(name, hp, attack, defense, coin);
  }

  special() {} // TODO each class should have Special
    
}