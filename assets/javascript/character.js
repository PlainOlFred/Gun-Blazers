const characterNameEl = document.querySelector('#character-name')
const statsListEl = document.querySelector('#stats-list')

const character = {
  name: 'HB Robo',
  lvl: 1,
  hp: 100,
  stats: {
    str: 5, // attack power
    end: 5, // defense
    agi: 5, // dodge -> timer length to not get hit
    con: 5, // healthing points 
  }
} // TODO move to db

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

function renderStats(stats) {

  for(stat in stats) {
    const statItem = document.createElement('li')
    console.log(statItem)
    statItem.setAttribute('class', 'list-group-item stat-list-item')

    statItem.textContent = `${mapStatName(stat)}: ${stats[stat]}`
    statsListEl.appendChild(statItem)
  }

}

function init() {
  characterNameEl.textContent = character.name

  renderStats(character.stats)

}

init()