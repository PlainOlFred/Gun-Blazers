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

    let warrior = createPlayer('warrior', 200, 1, 1, 1, '../images/animal-1.jpg')
    let sorcerer = createPlayer('sorcerer', 70, 10, 5, 10, '../images/SB_pic.jpg')
    let elf = createPlayer('Elf', 500, 2, 5, 2, '../images/animal-1.jpg')
    let wizard = createPlayer('Wizard', 100, 5, 5, 3, '../images/animal-1.jpg')
    let rouge = createPlayer('Rouge', 80, 5, 5, 20, '../images/animal-1.jpg')

    let players = [warrior, sorcerer, elf, wizard, rouge]
    let playerCards = []

    //player select variable
    let playerSelect = false;
    let opponentSelect= false;
    

    //Action variables 
    let playerName = ' '
    let playerHp = 1;
    let playerAttack = 0;
    let playerCounterAttack = 0;
    let playerDefend = 0;

    let opponentName = ' '
    let opponentHp = 1;
    let opponentAttack = 0;
    let opponentCounterAttack = 0;
    let opponentDefned = 0;

    let inc = 2

    

   

    

    



    //create player card
    $('#instructionsText').text('Choose Your Player')
    players.forEach(function(player){
        let playerCard = $(`<div>
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
        playerCard.addClass('playerCard')
        //need to access Data
        playerCard.attr('dataHp', player.hp) 
        playerCard.attr('dataAttack', player.attack)
        playerCard.attr('dataCounterAttack', player.counterAttack)
        playerCard.attr('dataDefend', player.defend)
        playerCards.push(playerCard)
    });
    //print cards 
    $('#choosePlayerLine').append(playerCards)
 

    //click to choose player
    $('.playerCard').click(function(){
           
           
            $('#instructionsText').text('Choose Your Opponent')
            if(!playerSelect){

                playerHp =$(this).attr('dataHp');
                playerAttack =$(this).attr('dataAttack');
                playerCounterAttack =$(this).attr('dataCounterAttack');
                playerDefend =$(this).attr('dataDefend');

                $('#yourPlayerLine').append($(this));
                $(this).unbind();            
                $('#yourPlayerText').text('Your Player')
                playerSelect = true;

            } else if(!opponentSelect){

                opponentHp =$(this).attr('dataHp');
                opponentAttack =$(this).attr('dataAttack');
                opponentCounterAttack =$(this).attr('dataCounterAttack');
                opponentDefend =$(this).attr('dataDefend');

                $('#yourOpponentText').text('Your Opponent');
                $('#yourOpponentLine').append($(this));
                $('button').show();
                selected = true;
                opponentSelect = true;

            } 
        
            })
        



    
    $('#attackButton').click(function(){
        //oppnent loses HP 
        opponentHp -= playerAttack
        $('#yourOpponentLine > .playerCard > .playerCardHp').text(opponentHp)
        
        //playerloose HP
        playerHp -= opponentCounterAttack
        $('#yourPlayerLine > .playerCard > .playerCardHp').text(playerHp)
            //Defend Optional
        //player gets stronger

        
        

    })

    $('#defendButton').click(function(){
        console.log(opponentCounterAttack)

    })
    

    


    















    

});