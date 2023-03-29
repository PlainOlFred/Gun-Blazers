
const classSelect = document.querySelector('#character-class-select')
const createCharacterBtn = document.querySelector('#create-character-btn')
const createCharacterNameInput = document.querySelector('#character-name-input')
const characterAttributeList = document.querySelector('#character-attribute-list')
const characterShowdownBox = document.querySelector('#character-showdown-box')
const opponentShowdownBox = document.querySelector('#opponent-showdown-box')
const beginShowdownBtn = document.querySelector('#begin-showdown-btn')

// Select character
let characterName
let selectedCharacter

let selectedOppent = new Sharpshooter({name: 'dummy'})


/* Create Character */
const handleCharacterClassSelect = (e) => {
  const {name, value} = e.target
  const characterName = createCharacterNameInput.value.trim()

  console.log(createCharacterNameInput.value)
  switch(value) {
    case 'CS|SHRPSHTR':
      selectedCharacter = new Sharpshooter({ name: characterName})
    break
    case 'CS|DTY':
      selectedCharacter = new Deputy({ name: characterName})
    break
    case 'CS|SHFF':
      selectedCharacter = new Sheriff({ name: characterName})
    break
  }

  displayCharacterAttributes()

}

const displayCharacterAttributes = () => {
  const attributes = {
    HP: selectedCharacter._hp,
    ATK: selectedCharacter._attack,
    DEF: selectedCharacter._defense,
    COIN: selectedCharacter._coin

  }

  characterAttributeList.innerHTML = ''
  Object.entries(attributes).forEach((k,v) => {
    console.log(k)
    const attributeItem = document.createElement('li')
    attributeItem.textContent = `${k[0]}: ${k[1]}`
    
  characterAttributeList.appendChild(attributeItem)
  })
}

const handleCreateCharacter = () => {
  console.log(selectedCharacter)
  displayCharacterShowdown()
  displayOppentShowdown()


  beginShowdownBtn.removeAttribute('disabled')
}

const handleCharacterNameInputChange = (e) => {
  const { value } = e.target

  if(value.length > 0) {
    classSelect.removeAttribute('disabled')
  } else {
    classSelect.setAttribute('disabled', true)
  }

}

/* Select opponent */



/* Showdown */
const displayCharacterShowdown = () => {
  characterShowdownBox.innerHTML = ''
  const name = selectedCharacter._name
  const hp = selectedCharacter._hp

  // Display Name
  const nameEl = document.createElement('h3')
  nameEl.textContent = name
  characterShowdownBox.appendChild(nameEl)

  // Display HP
  const hpEl = document.createElement('h3')
  hpEl.textContent = "Health " + hp
  characterShowdownBox.appendChild(hpEl)

  // Display Buttons
  const attackBtn = document.createElement('button')
  const defendBtn = document.createElement('button')
  const inventoryBtn = document.createElement('button')

  attackBtn.textContent = 'Attack'
  defendBtn.textContent = "Defend"
  inventoryBtn.textContent = "Inventory"

  attackBtn.onclick = handleCharacterAttack
  defendBtn.onclick = handleCharacterDefense

  characterShowdownBox.appendChild(attackBtn)
  characterShowdownBox.appendChild(defendBtn)
  characterShowdownBox.appendChild(inventoryBtn)

}

const displayOppentShowdown = () => {
  opponentShowdownBox.innerHTML = ''
  const name = selectedOppent._name
  const hp = selectedOppent._hp

  // Display Name
  const nameEl = document.createElement('h3')
  nameEl.textContent = name
  opponentShowdownBox.appendChild(nameEl)

  // Display HP
  const hpEl = document.createElement('h3')
  hpEl.textContent = "Health " + hp
  opponentShowdownBox.appendChild(hpEl)

}

const displayShowndownRoundResults = () => {
  // You took _ Damange
  // You dealt _ DAmage
  // You Died
  // You Defeated
}

const displayShowndownResults = () => {
  // You took _ Damange
  // You dealt _ DAmage
  // You Died
  // You Defeated
}


const displayShowdownResults = () => {

}

const handleCharacterShowdownAction = () => {

}

const handleCharacterAttack = () => {
  console.log('Attack', selectedCharacter._attack, selectedOppent._defense)
  selectedOppent._hp = selectedOppent._hp - selectedCharacter._attack


  displayCharacterShowdown()
  displayOppentShowdown()
}

const handleCharacterDefense = () => {
  console.log('Defend')
}


const showdownSqeuence = async () => {
  beginShowdownBtn.setAttribute('class', 'hide')
  beginShowdownBtn.removeEventListener('click', showdownSqeuence)

  console.log('fight')
  // while(selectedCharacter._isAlive || selectedOppent._isAlive) {
  //   handleCharacterAttack()
  // }

}








classSelect.addEventListener('change', handleCharacterClassSelect)
createCharacterBtn.addEventListener('click', handleCreateCharacter)
createCharacterNameInput.addEventListener('input', handleCharacterNameInputChange)

beginShowdownBtn.addEventListener('click', showdownSqeuence)