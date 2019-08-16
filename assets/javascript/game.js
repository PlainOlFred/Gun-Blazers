$(document).ready(function(){



//Characters
let warrior = {
    name: 'Warrior',
    pic: '../images/animal-1.jpg',
    hp: 200,
    attack: 5,
    defend: 5
};

let sorcerer= {
    name: 'Sorcerer',
    pic: '../images/SB_pic.jpg',
    hp: 70,
    attack: 10,
    defend: 10
};

let elf = {
    name: 'Elf',
    pic: '../images/SB_pic.jpg',
    hp: 500,
    attack: 2,
    defend: 2
};

let wizard = {
    name: 'Wizard',
    pic: '../images/SB_pic.jpg',
    hp: 100,
    attack: 5,
    defend: 2
};

let rouge = {
    name: 'Rouge',
    pic: '../images/SB_pic.jpg',
    hp: 80,
    attack: 5,
    defend: 20
};




let players = [warrior, sorcerer, elf, wizard, rouge];
let test = ['a', 'b', 'c']

//create player card
$('#startGameButton').click(function(){
    $(this).hide();
    createPlayerCard = function(){
    }
    
    players.forEach(function(player){
        $('#choosePlayerLine').append(
            $(`<div class="playerCard">
                <div class="playerCardName">
                    ${player.name}
                </div> 
                <div class="playerCardHp">
                    ${player.hp}
                </div>
                <div>
                    <img src=${player.pic}/>
                </div>
            </div>`)
        )
    
        
    });
});

    
});














function fight(x) {
    return x;

};

function defend(x ){
    return x;
};




