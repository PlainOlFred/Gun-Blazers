$(document).ready(function () {
  $("#storyBoxBtn").hide();
   /**
   * Main Menu Controls
   *
   */


  /**
   * Player select Controls
   *
   */
  let currentPlayerIndex = 0;
  function handleNextPlayerClick() {
    console.log("next");
    if (currentPlayerIndex == playersCount - 1) {
      currentPlayerIndex = 0;
    } else {
      currentPlayerIndex++;
    }

    renderPalyerData(players[currentPlayerIndex]);
  }
  function handlePrevPlayerClick() {
    if (currentPlayerIndex == 0) {
      currentPlayerIndex = playersCount - 1;
    } else {
      currentPlayerIndex--;
    }

    renderPalyerData(players[currentPlayerIndex]);
  }

  function renderPalyerData(player) {
    $("#player-select-card").attr("src", player.pic);
    $("#select-player-name").text(player.name);
    $("#select-player-class").text(player.playerClass);
    $("#select-player-hp").text(player.hp);
    $("#select-player-ap").text(player.attack);
    $("#select-player-defense").text(player.defense);
  }

  $("#prev-player-select-button").on("click", handlePrevPlayerClick);
  $("#next-player-select-button").on("click", handleNextPlayerClick);

  renderPalyerData(players[currentPlayerIndex]);

   /**
     * Game
     *
   */

  //player select variable
  let playerSelect;
  opponentSelect = false;

  //Action variables
  let playerHp = 1;
  (playerAttack = 0), (playerDefend = 0), (opponentName = " ");
  opponentHp = 1;
  opponentCounterAttack = 0;

  //create player card
  $("#instructionsText").text("Choose Your Player");
  let playerCards = [];

  //print cards

  //click to choose player
  $("#choosePlayerLine").on("click", ".playerCard", function () {
    $("#instructionsText").text("Choose Your Opponent");
    if (!playerSelect) {
      playerHp = $(this).attr("dataHp");
      playerAttack = $(this).attr("dataAttack");
      playerCounterAttack = $(this).attr("dataCounterAttack");
      playerDefend = $(this).attr("dataDefend");

      $("#yourPlayerText").text("Your Player");
      $("#yourPlayerLine").append($(this));

      playersCount--;

      $(this).unbind();

      playerSelect = true;
    } else if (!opponentSelect) {
      opponentName = $(this).attr("dataName");
      opponentHp = $(this).attr("dataHp");
      opponentAttack = $(this).attr("dataAttack");
      opponentCounterAttack = $(this).attr("dataCounterAttack");
      opponentDefend = $(this).attr("dataDefend");

      $("#yourOpponentText").text("Your Opponent");
      $("#yourOpponentLine").append($(this));

      //Show Story Box
      $("#storyBox").show();

      playersCount--;

      $(this).unbind();

      opponentSelect = true;

      $("#attackButton")
        .css({ display: "inline-block", clear: "both" })
        .prop("disabled", false);
    }
  });

  $("#attackButton").on("click", function () {
    //storyBoxText
    $("#storyBoxTextTop").text(
      "You attacked " + opponentName + " for " + playerAttack + " damage."
    );
    $("#storyBoxTextBottom").text(
      opponentName +
        " counter attacks for " +
        opponentCounterAttack +
        " damage."
    );

    //oppnent loses HP
    opponentHp -= playerAttack;
    $("#yourOpponentLine > .playerCard > .card-body> .card-text").text(
      opponentHp
    );
    console.log($("#yourOpponentLine"));
    console.log($("#yourOpponentLine")[0]);
    console.log(opponentHp);

    //player loses HP
    playerHp -= opponentCounterAttack;
    $("#yourPlayerLine > .playerCard > .card-body > .card-text").text(playerHp);
    console.log(playerHp);

    // player gets stronger by base attack (defend)
    playerAttack -= -playerDefend;

    if (opponentHp <= 0 && playersCount > 0) {
      $("#yourOpponentLine > .playerCard > .card-body > .card-text").text("0");
      $("#defeatOpponentLine").append($("#yourOpponentLine > .playerCard"));

      $("#yourOpponentText").text("Choose Next Opponent");
      $("#defeatOpponentText").text("Defeated Opponent");
      $("#storyBoxTextTop").text("You Have Defeated Your Oppenent");
      $("#storyBoxTextBottom").text("Choose Another");

      $(this).prop("disabled", true);

      opponentSelect = false;
    } else if (opponentHp <= 0 && playersCount === 0) {
      $("#yourOpponentLine > .playerCard > .card-body > .card-text").text("0");
      $("#defeatOpponentLine").append($("#yourOpponentLine > .playerCard"));

      $("#storyBoxTextTop").text("You Have Defeated all Opponents");
      $("#storyBoxTextBottom").text("Play Again?");

      $("#attackButton").hide();

      //show reload button
      $("#storyBoxBtn").show();
    }

    if (playerHp <= 0) {
      $("#yourPlayerLine > .playerCard > .card-body > .card-text").text("0");
      $(this).prop("disabled", true);
      $("#storyBoxTextTop").text("You Have Been Defeated");
      $("#storyBoxTextBottom").text("Play Again?");

      //show reload button
      $("#storyBoxBtn").show();
    }
  });

  $("#storyBoxBtn").on("click", function () {
    location.reload();
  });
});
