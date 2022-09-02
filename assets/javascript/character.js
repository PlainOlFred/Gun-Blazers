const characterNameEl = document.querySelector('#character-name')
const statsListEl = document.querySelector('#stats-list')
const equipmentListEl = document.querySelector('#equipment-list')
const inventoryListEl = document.querySelector('#inventory-list')

const character = {
  name: 'HB Robo',
  lvl: 1,
  hp: 100,
  stats: {
    str: 5, // attack power
    end: 5, // defense
    agi: 5, // dodge -> timer length to not get hit
    con: 5, // healthing points 
  },
  eqipument: {
  weapon: '1', // increases attack
  armor: '3', // decreases opponent's attack
  projectiles: ['6', '5'], // allow power if op is turn they lose a turn based on agi
  },
  inventory: ['1', '2', '3', '6', '6']
} // TODO move to localstorage -> db

const items = [
  {
    id: '1',
    type: 'weapon',
    name: 'Blaser',
    acc: 80,
    attack: 5
  },
  {
    id: '2',
    type: 'weapon',
    name: 'Lazer',
    acc: 90,
    attack: 3
  },
  {
    id: '3',
    type: 'armor',
    name: 'Leather',
    acc: 80,
    defense: 5
  },
  {
    id: '4',
    type: 'armor',
    name: 'Pads',
    defense: 3
  },
  {
    id: '5',
    type: 'projectile',
    name: 'bomber',
    acc: 80,
    attack: 5
  },
  {
    id: '6',
    type: 'projectile',
    name: 'bomber 2',
    acc: 80,
    attack: 5
  },
]



function mapStatName(stat) {
  switch(stat) {
    case 'str':
      return 'Strength'
    case 'end':
      return 'Endurance'
    case 'agi':
      return 'Agility'
    case 'con':
      return 'Constitution'
  }

}

function renderStats() {
  characterNameEl.textContent = character.name

  const stats = character.stats

  for(stat in stats) {
    const statItem = document.createElement('li')
    statItem.setAttribute('class', 'list-group-item stat-list-item')

    statItem.textContent = `${mapStatName(stat)}: ${stats[stat]}`
    statsListEl.appendChild(statItem)
  }

}

function renderEqupipment() {
  // TODO loop through equipment
  const weaponEl = document.createElement('li')
  const armorEl = document.createElement('li')
  const projectile1El = document.createElement('li')
  const projectile2El = document.createElement('li')

  weaponEl.setAttribute('class', 'list-group-item')
  armorEl.setAttribute('class', 'list-group-item')
  projectile1El.setAttribute('class', 'list-group-item')
  projectile2El.setAttribute('class', 'list-group-item')

  const weapon = items.find(i => i.id === character.eqipument.weapon)
  const armor = items.find(i => i.id === character.eqipument.armor)
  const projectile1 = items.find(i => i.id === character.eqipument.projectiles[0])
  const projectile2 = items.find(i => i.id === character.eqipument.projectiles[1])

  weaponEl.textContent = `${weapon.name}: ${weapon.attack} attack`
  armorEl.textContent = `${armor.name}: ${armor.defense} defense`
  projectile1El.textContent = `${projectile1.name}: ${weapon.attack} attack`
  projectile2El.textContent = `${projectile2.name}: ${weapon.attack} attack`
  
  equipmentListEl.appendChild(weaponEl)
  equipmentListEl.appendChild(armorEl)
  equipmentListEl.appendChild(projectile1El)
  equipmentListEl.appendChild(projectile2El)
}

function renderInventorty() {
  // TODO loop through equipment
  character.inventory.forEach(itemId => {
    const itemEl = document.createElement('li')
    itemEl.setAttribute('class', 'list-group-item')

    const item = items.find(i => i.id === itemId)
    itemEl.textContent = `${item.name}: ${item.type}`

    inventoryListEl.appendChild(itemEl)

  })
}

function init() {
  

  renderStats()
  renderEqupipment()
  renderInventorty()

}

init()