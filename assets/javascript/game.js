$(document).ready(function(){



    //Characters try creating a factory
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
    let playerSelect = false;
    let opponentSelect= false;
    let currentPlayer = warrior;
    let currentOpponent = elf;


    //create player card
    $('#instructionsText').text('Choose Your Player')
    players.forEach(function(player){
        $('#choosePlayerLine').append(
            $(`<div class="playerCard" id="playerCard${player.name}">
                <div class="playerCardName">
                    ${player.name}
                </div> 
                <div>
                    <img src=" "/>
                </div>
                <div class="playerCardHp">
                    ${player.hp}
                </div>
            </div>`)
        )
        
    });

    //click to choose player
    $('.playerCard').click(function(){//check selected selector syntax
        
            $('#instructionsText').text('Choose Your Opponent')
            if(!playerSelect){
                $('#yourPlayerText').text('Your Player');
                $('#yourPlayerLine').append($(this));
                $(this).unbind();
                currentPlayer = players[$.inArray(elf, players)];//placeholder
                playerSelect = true;

            } else if(!opponentSelect){
                $('#yourOpponentText').text('Your Opponent');
                $('#yourOpponentLine').append($(this));
                $('button').show();
                selected = true;
                opponentSelect = true;

            } 
        
            })
        
    
    $('#attackButton').click(function(){
        console.log('attack')
        

    })

    $('#defendButton').click(function(){
        console.log('defend')

    })
    



    















    function attack(x) {
    return x;

    };

    function defend(x ){
    return x;
    };

});