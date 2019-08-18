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
            pic: p,
            hp: h,
            attack: a,
            counterAttack: c,
            defend: d

        }

    }

    let warrior = createPlayer('Warrior', 10, 2, 1, 2, '../images/animal-1.jpg')
    let sorcerer = createPlayer('Sorcerer', 12, 3, 2, 3, '../images/SB_pic.jpg')
    let elf = createPlayer('Elf', 50, 1, 1, 1, '../images/animal-1.jpg')
    let wizard = createPlayer('Wizard', 8, 6, 3, 6, '../images/animal-1.jpg')
    let rouge = createPlayer('Rouge', 12, 2, 7, 2, '../images/animal-1.jpg')
   

    let players = [warrior, sorcerer, elf, wizard, rouge]
    let playersCount= players.length;
    console.log(playersCount)
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

    
    
    



    //create player card
    $('#instructionsText').text('Choose Your Player')
    players.forEach(function(player){
        let playerCard = $(`<div id="playerId${player.name}">
            <div class="playerCardName">
                ${player.name}
            </div> 
            <div>
                <img src=" ">
            </div>
            <div class="palyerBio"></div>
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

        
        playerAttack -= -playerDefend// player gets stronger by base attack (defend) += concatted


        
            if(opponentHp <= 0){
                
                    $('#yourOpponentLine > .playerCard > .playerCardHp').text('0')
                    $('#defeatOpponentLine').append($('#yourOpponentLine > .playerCard'))
                    $('#yourOpponentText').text('Choose Next Opponent');
                    $('#secondBreak').show()
                    $('#defeatOpponentText').text('Defeated Opponent');
                    opponentSelect = false;
                    $(this).prop('disabled',true)
                } 

            if(playerHp <= 0){
                $('#yourPlayerLine > .playerCard > .playerCardHp').text('0')
                $(this).prop('disabled',true)
                $('#storyBoxTextTop').text('You Have  Been Defeated')
                $('#storyBoxTextBottom').text('Refresh Page to try agian')
                
            }

            if($(opponentHp <= 0 && playersCount === 0)){
                $('#storyBoxTextTop').text('You Have Defeated all Opponents')
                $('#storyBoxTextBottom').text('Refresh Page to try again')
               
                
        
            }
            
    })
        

        
        

    

    $('#defendButton').click(function(){
        console.log(opponentCounterAttack)

    })
    
    console.log(storyBox)

    

});

