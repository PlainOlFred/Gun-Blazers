//CreatePlayer factory
  const createPlayer = function (
    name,
    playerClass,
    hp,
    attack,
    counterAttack,
    defend,
    pic
  ) {
    return {
      name,
      playerClass,
      hp,
      attack,
      counterAttack,
      defend,
      pic,
    };
  };


 // Create Players  this data will be move to database
  let gil = createPlayer(
    "Gil",
    "Sharpshooter",
    200,
    2,
    1,
    2,
    "assets/images/warrior.jpg"
  );
  let josh = createPlayer(
    "Josh",
    "Outlaw",
    120,
    3,
    2,
    3,
    "assets/images/sorcerer.jpg"
  );
  let eark = createPlayer(
    "Eark",
    "Sheriff",
    120,
    3,
    2,
    3,
    "assets/images/sorcerer.jpg"
  );
  let reuben = createPlayer(
    "Reuben",
    "Gambler",
    120,
    3,
    2,
    3,
    "assets/images/sorcerer.jpg"
  );
  let jesse = createPlayer(
    "Jesse",
    "Gunslinger",
    100,
    1,
    1,
    1,
    "assets/images/elf.jpg"
  );
  let belle = createPlayer(
    "Belle",
    "Gunslinger",
    80,
    6,
    3,
    6,
    "assets/images/sorcerer.jpg"
  );
  let caroline = createPlayer(
    "Caroline",
    "Madam",
    180,
    2,
    7,
    2,
    "assets/images/rouge2.jpg"
  );
   let betsy = createPlayer(
    "Betsy",
    "Cowgirl",
    180,
    2,
    7,
    2,
    "assets/images/rouge2.jpg"
  );

  let players = [gil, josh, eark, reuben, jesse, belle, caroline, betsy];
  let playersCount = players.length;
