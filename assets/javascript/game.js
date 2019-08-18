$(document).ready(function(){
    $('hr').hide()
    
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
            hp: h,
            attack: a,
            counterAttack: c,
            defend: d,
            pic: p
        }
    }

    let warrior = createPlayer('Warrior', 200, 2, 1, 2, 'assets/images/warrior.jpg')
    let sorcerer = createPlayer('Sorcerer', 120, 3, 2, 3, 'assets/images/sorcerer.jpg')
    let elf = createPlayer('Elf', 100, 1, 1, 1, 'assets/images/elf.jpg')
    let wizard = createPlayer('Wizard', 80, 6, 3, 6, 'assets/images/wizard.jpg')
    let rouge = createPlayer('Rouge', 180, 2, 7, 2, 'assets/images/rouge2.jpg')
   

    let players = [warrior, sorcerer, elf, , rouge, wizard]
    let playersCount= players.length;
    let playerCards = []


    //player select variable
    let playerSelect = false;
    let opponentSelect= false;
    
    //Action variables 
    let playerHp = 1;
    let playerAttack = 0;
    let playerDefend = 0;

    let opponentName = ' '
    let opponentHp = 1;
    let opponentCounterAttack = 0;

    //create player card
    $('#instructionsText').text('Choose Your Player')
    players.forEach(function(player){
        let playerCard = $(`<div id="playerId${player.name}">
            <div class="playerCardName">
                ${player.name}
            </div> 
            <div>
                <img class="playerImage" src="${player.pic}">
            </div>
        
            <div class="playerCardHp">
                ${player.hp}
            </div>
        </div>`
        );

        playerCard.addClass('playerCard')

        //need to access Data
        playerCard.attr('dataName', player.name)
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
                
                $('#yourPlayerLine').prepend($(this));
                playersCount --;
                console.log(playersCount)
                $(this).unbind();  

                $('#yourPlayerText').text('Your Player')
                playerSelect = true;
                

            } else if(!opponentSelect){

                opponentName = $(this).attr('dataName');
                opponentHp =$(this).attr('dataHp');
                opponentAttack =$(this).attr('dataAttack');
                opponentCounterAttack =$(this).attr('dataCounterAttack');
                opponentDefend =$(this).attr('dataDefend');

                $('#yourOpponentText').text('Your Opponent');
                $('#storyBox').show();
                $('button').show();
                $('#yourOpponentLine').append($(this));
                playersCount --;
                console.log(playersCount)

                $('button').css({'display': 'inline-block', 'clear': 'both'})
                $('button').prop('disabled', false)
                $('#firstBreak').show()
                opponentSelect = true;
                $(this).unbind(); 

            } 
        
            })
        



    
    $('#attackButton').click(function(){
        //storyBoxText before crementation
        $('#storyBoxTextTop').text('You attacked ' + opponentName + ' for ' + playerAttack + ' damage.') 
        $('#storyBoxTextBottom').text(opponentName + ' counter attacks for ' + opponentCounterAttack + ' damage.')
        opponentHp -= playerAttack //oppnent loses HP 
        $('#yourOpponentLine > .playerCard > .playerCardHp').text(opponentHp)
        
        playerHp -= opponentCounterAttack //playerloose HP
        $('#yourPlayerLine > .playerCard > .playerCardHp').text(playerHp)
        console.log(playersCount)

        
        playerAttack -= -playerDefend// player gets stronger by base attack (defend) += concatted


        
            if(opponentHp <= 0 && playersCount >=1){
                
                    $('#yourOpponentLine > .playerCard > .playerCardHp').text('0')
                    $('#defeatOpponentLine').append($('#yourOpponentLine > .playerCard'))
                    $('#yourOpponentText').text('Choose Next Opponent');
                    $('#secondBreak').show()
                    $('#defeatOpponentText').text('Defeated Opponent');
                    $('#storyBoxTextTop').text('You Have Defeated Your Oppenent')
                    $('#storyBoxTextBottom').text('Choose Another')
                    opponentSelect = false;
                    $(this).prop('disabled',true)
                } else if(opponentHp <= 0 && playersCount <1){
                    $('#storyBoxTextTop').text('You Have Defeated all Opponents')
                    $('#storyBoxTextBottom').text('Refresh Page to Play Again')
                    console.log(playersCount)
                   
                    
            
                }

            if(playerHp <= 0){
                $('#yourPlayerLine > .playerCard > .playerCardHp').text('0')
                $(this).prop('disabled',true)
                $('#storyBoxTextTop').text('You Have Been Defeated')
                $('#storyBoxTextBottom').text('Refresh Page to try agian')
                
            }

            
            
    })
        
});

