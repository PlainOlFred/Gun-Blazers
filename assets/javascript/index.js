
const classSelect = document.querySelector('#character-class-select')
const createCharacterBtn = document.querySelector('#create-character-btn')
const createCharacterNameInput = document.querySelector('#character-name-input')
const characterAttributeList = document.querySelector('#character-attribute-list')

// Select character
let characterName
let selectCharacter


/* Create Character */
const handleCharacterClassSelect = (e) => {
  const {name, value} = e.target
  const characterName = createCharacterNameInput.value.trim()

  console.log(createCharacterNameInput.value)
  switch(value) {
    case 'CS|SHRPSHTR':
      selectCharacter = new Sharpshooter({ name: characterName})
    break
    case 'CS|DTY':
      selectCharacter = new Deputy({ name: characterName})
    break
    case 'CS|SHFF':
      selectCharacter = new Sheriff({ name: characterName})
    break
  }

  displayCharacterAttributes()

}

const displayCharacterAttributes = () => {
  const attributes = {
    HP: selectCharacter._hp,
    ATK: selectCharacter._attack,
    DEF: selectCharacter._defense,
    COIN: selectCharacter._coin

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
  console.log(selectCharacter)
}

const handleCharacterNameInputChange = (e) => {
  const { value } = e.target

  if(value.length > 0) {
    classSelect.removeAttribute('disabled')
  } else {
    classSelect.setAttribute('disabled', true)
  }

}








classSelect.addEventListener('change', handleCharacterClassSelect)
createCharacterBtn.addEventListener('click', handleCreateCharacter)
createCharacterNameInput.addEventListener('input', handleCharacterNameInputChange)