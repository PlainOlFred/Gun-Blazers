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

    // Create Players
    let 
        warrior = createPlayer('Warrior', 200, 2, 1, 2, 'assets/images/warrior.jpg'),
        sorcerer = createPlayer('Sorcerer', 120, 3, 2, 3, 'assets/images/sorcerer.jpg'),
        elf = createPlayer('Elf', 100, 1, 1, 1, 'assets/images/elf.jpg'),
        wizard = createPlayer('Wizard', 80, 6, 3, 6, 'assets/images/wizard.jpg'),
        rouge = createPlayer('Rouge', 180, 2, 7, 2, 'assets/images/rouge2.jpg')
    

    let players = [warrior, sorcerer, elf, rouge, wizard];

    let playersCount= players.length;
    


    //player select variable
    let 
        playerSelect 
        opponentSelect= false;
    
    //Action variables 
    let 
        playerHp = 1;
        playerAttack = 0,
        playerDefend = 0,
        opponentName = ' '
        opponentHp = 1;
        opponentCounterAttack = 0;

    //create player card
    $('#instructionsText').text('Choose Your Player');
    let playerCards = [];

    players.forEach(function(player){
        let  playerCard = $(     
        `<div class="card" id="playerId${player.name} style="width: 18rem;">
            <img class="card-img-top playerImage" src="${player.pic}" alt"${player.name}">
            <div class="card-body">
                <h5 class="card-title">
                    ${player.name}
                </h5>
                <p class="card-text">
                    ${player.hp}
                </p>
                
            </div>
        </div>`
        );



        //Player Card Data
        playerCard.attr({
            'class': 'playerCard',
            'dataName': player.name,
            'dataHp': player.hp,
            'dataAttack': player.attack,
            'dataCounterAttack': player.counterAttack,
            'dataDefend': player.defend
        })
       
        
        return playerCards.push(playerCard) 
    });

    
    //print cards 
    $('#choosePlayerLine').append(playerCards)
    




    //click to choose player
    $('#choosePlayerLine').on('click', '.playerCard', function() {
            $('#instructionsText').text('Choose Your Opponent')
            if(!playerSelect){

                playerHp =$(this).attr('dataHp');
                playerAttack =$(this).attr('dataAttack');
                playerCounterAttack =$(this).attr('dataCounterAttack');
                playerDefend =$(this).attr('dataDefend');

                $('#yourPlayerText').text('Your Player');
                $('#yourPlayerLine').append($(this));

                playersCount --;
               
                $(this).unbind();  

                playerSelect = true;
                

            } else if(!opponentSelect){

                opponentName = $(this).attr('dataName');
                opponentHp =$(this).attr('dataHp');
                opponentAttack =$(this).attr('dataAttack');
                opponentCounterAttack =$(this).attr('dataCounterAttack');
                opponentDefend =$(this).attr('dataDefend');

                $('#yourOpponentText').text('Your Opponent');
                $('#yourOpponentLine').append($(this));

                //Show Story Box
                $('#storyBox').show();
                $('button').show();
                
                playersCount --;

                $(this).unbind(); 

                opponentSelect = true;
                

                $('button').css({'display': 'inline-block', 'clear': 'both'})
                $('button').prop('disabled', false)
                $('#firstBreak').show()

                
                

            } 
        
            })
        



    
    $('#attackButton').click(function(){
        //storyBoxText before crementation
        $('#storyBoxTextTop').text('You attacked ' + opponentName + ' for ' + playerAttack + ' damage.') 
        $('#storyBoxTextBottom').text(opponentName + ' counter attacks for ' + opponentCounterAttack + ' damage.')
        
        //oppnent loses HP
        opponentHp -= playerAttack  
        $('#yourOpponentLine > .playerCard > .card-body> .card-text').text(opponentHp)
        console.log($('#yourOpponentLine'))
        console.log($('#yourOpponentLine')[0])
        console.log(opponentHp)
        
        //playerloose HP
        playerHp -= opponentCounterAttack 
        $('#yourPlayerLine > .playerCard > .card-body > .card-text').text(playerHp)
        console.log(playerHp)
        

        
        playerAttack -= -playerDefend// player gets stronger by base attack (defend) += 

            if(opponentHp <= 0 && playersCount >=0){
                
                    $('#yourOpponentLine > .playerCard > .card-body > .card-text').text('0')
                    $('#defeatOpponentLine').append($('#yourOpponentLine > .playerCard'))
                    $('#yourOpponentText').text('Choose Next Opponent');
                   
                    $('#defeatOpponentText').text('Defeated Opponent');
                    $('#storyBoxTextTop').text('You Have Defeated Your Oppenent')
                    $('#storyBoxTextBottom').text('Choose Another')
                    opponentSelect = false;
                    $(this).prop('disabled',true)
                } else if(opponentHp <= 0 && playersCount < 1){
                    $('#storyBoxTextTop').text('You Have Defeated all Opponents')
                    $('#storyBoxTextBottom').text('Refresh Page to Play Again')
                      
            
                }

            if(playerHp <= 0){
                $('#yourPlayerLine > .playerCard > .card-body > .card-text').text('0')
                $(this).prop('disabled',true)
                $('#storyBoxTextTop').text('You Have Been Defeated')
                $('#storyBoxTextBottom').text('Refresh Page to try agian')
                
            }

            
            
    })
        
});

