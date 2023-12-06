export const announceResult = (playerSelection, compSelection) => {
    const lookup = {
      'Scissors': 'Paper',
      'Paper': 'Rock',
      'Rock': 'Scissors'
    };
    if (!(playerSelection && compSelection)) {
      return 'Waiting';
    }
    // Tree === Tree
    if (lookup[playerSelection] === compSelection) {
      return 'Won';
    }
    if (lookup[compSelection] === playerSelection) {
      return 'Lost';
    }
    return 'Tied';
  };
  


  export const genFeedbackMessage = (status) => {
    const lookup = {
      Waiting: 'Waiting for your choice!',
      Won: 'You win!!',
      Lost: 'Too bad! Better luck next time.',
      Tied: 'Tie game'
    };
    return lookup[status];
  };

  export const robotSelection = (cheating, playerSelection) => {
    const lookup = {
      'Scissors': 'Rock',
      'Paper': 'Scissors',
      'Rock': 'Paper'
    };
    // Rock: Paper
    // playerSelection = Rock
    // lookup["Rock"] = Paper

    // Paper: Scissors
    // playerSelection = Paper
    // lookup["Paper"] = Scissors
    if(cheating){
      return lookup[playerSelection]
    }
    // The function needs to output one of three elements
    const arrayOfChoices = ["Rock", "Paper", "Scissors"]
    const randomIndex = Math.floor(Math.random() * arrayOfChoices.length) // 0-3 but never 3
    console.log(randomIndex)
    return arrayOfChoices[randomIndex]
  }