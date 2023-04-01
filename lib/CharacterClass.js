const characterClasses = {
  sharpshooter: {
    hp: 150,
    attack: 4,
    defense: 6,
    coin: 1200,
  },
  deputy: {
    hp: 200,
    attack: 5,
    defense: 6,
    coin: 200,
  },
  sheriff: {
    hp: 250,
    attack: 7,
    defense: 8,
    coin: 800,
  },
};

class Character {
  constructor(name, hp, attack, defense, coin) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.coin = coin;
    this.inventory = [];
    this.equippedWeapon = null;
    this.equippedAmour = null;
  }

  purchase(item) {
    if (item.price > this.coin) {
      console.log("not enough money"); // TODO handle insuff funds
      return;
    }

    this.coin = this.coin - item.price;

    this.inventory.push(item.name); // TODO push Item objects
  }

  equippAmour(armour) {
    this.equippedAmour = armour;
  }

  equippAmour(weapon) {
    this.equippedWeapon = weapon;
  }

  useItem(item) {
    item.effect(this); // Item effect
  }
  get _name() {
    return this.name;
  }
  set _name(newName) {
    this.name = newName;
  }
  get _hp() {
    return this.hp;
  }
  set _hp(newHp) {
    this.hp = newHp;
  }
  get _attack() {
    // TODO roll die and attack logic return modified attack
    // TODO account for weapon bouns
    // TODO Crtitial Attack
    // TODO Missed Attack -> return 0,
    // TODO return original attack and modified attack [5, 7] or [5,3]
    return this.attack;
  }
  set _attack(newAttack) {
    this.attack = newAttack;
  }
  get _defense() {
    // TODO roll die and attack logic return modified defense
    // TODO account for armor bouns
    // TODO return original defense and modified defense
    return this.defense;
  }
  set _defense(newDefense) {
    this.defense = newDefense;
  }
  get _coin() {
    return this.coin;
  }
  set _coin(newCoin) {
    this.coin = newCoin;
  }

  get _isAlive() {
    return this.hp > 0;
  }

  set _isAlive(newHp) {
    return (this.hp = newHp);
  }
}

// Sharpshooter
class Sharpshooter extends Character {
  constructor({
    name,
    hp = characterClasses.sharpshooter.hp,
    attack = characterClasses.sharpshooter.attack,
    defense = characterClasses.sharpshooter.defense,
    coin = characterClasses.sharpshooter.coin,
  }) {
    super(name, hp, attack, defense, coin);
  }

  special() {} // TODO each class should have Special
}

// Deputy
class Deputy extends Character {
  constructor({
    name,
    hp = characterClasses.deputy.hp,
    attack = characterClasses.deputy.attack,
    defense = characterClasses.deputy.defense,
    coin = characterClasses.deputy.coin,
  }) {
    super(name, hp, attack, defense, coin);
  }

  special() {} // TODO each class should have Special
}

// Sheriff
class Sheriff extends Character {
  constructor({
    name,
    hp = characterClasses.sheriff.hp,
    attack = characterClasses.sheriff.attack,
    defense = characterClasses.sheriff.defense,
    coin = characterClasses.sheriff.coin,
  }) {
    super(name, hp, attack, defense, coin);
  }

  special() {} // TODO each class should have Special
}
