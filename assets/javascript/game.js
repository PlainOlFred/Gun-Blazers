$(document).ready(function(){
    
    //CreatePlayer factory
    const createPlayer = function(name, hp , attack, counterAttack, defend, pic){
        let n = name;
        let h = hp;
        let a = attack;
        let c = counterAttack;
        let d = defend;
        let p = pic;

        return {
            name: n,
            pic: p,
            hp: h,
            attack: a,
            counterAttack: c,
            defend: d

        }

    }

    let warrior = createPlayer('warrior', 200, 5, 5, 5, '../images/animal-1.jpg')
    let sorcerer = createPlayer('sorcerer', 70, 10, 5, 10, '../images/SB_pic.jpg')
    let elf = createPlayer('Elf', 500, 2, 5, 2, '../images/animal-1.jpg')
    let wizard = createPlayer('Wizard', 100, 5, 5, 3, '../images/animal-1.jpg')
    let rouge = createPlayer('Rouge', 80, 5, 5, 20, '../images/animal-1.jpg')

    let players = [warrior, sorcerer, elf, wizard, rouge]

    //player select variable
    let playerSelect = false;
    let opponentSelect= false;
    let currentPlayer = warrior;
    let currentOpponent = elf;
   

    

    



    //create player card
    $('#instructionsText').text('Choose Your Player')
    players.forEach(function(player){// var or let
        var playerCards = $(`<div>
                                <div class="playerCardName">
                                    ${player.name}
                                </div> 
                                <div>
                                    <img src=" ">
                                </div>
                                <div class="playerCardHp">
                                    ${player.hp}
                                </div>
                            </div>`
                            );

        
        playerCards.addClass('playerCard')
        playerCards.attr('dataObject', player) //might need to access Data
        
        $('#choosePlayerLine').append(playerCards)
        return playerCard = playerCards;
    });
 

    //click to choose player
    $('.playerCard').click(function(){
            // currentPlayer = $(this).playerCard['dataObject'];
            $('#instructionsText').text('Choose Your Opponent')
            if(!playerSelect){
                $('#yourPlayerLine').append($(this));
                $(this).unbind();            
                console.log('CP ' + currentPlayer);
                $('#yourPlayerText').text('Your Player')
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