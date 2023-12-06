import { announceResult, robotSelection } from "../helpers";

// We need to create four tests
describe('Test announceResult function', ()=> {
    let fakeState; 
    beforeEach(()=> {
      fakeState = {
          compSelection: null,
          playerSelection: null,
          status: 'Waiting',
          cheating: false
      }
    })
    // One for winning
    test('returns Won if the player is "Scissors" and the comp is "Paper"', ()=> {
      // Modify state to include the player selection and compSelection
      fakeState.playerSelection = 'Scissors';
      fakeState.compSelection = 'Paper';
      expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Won');
    })
    // One for losing
    test('returns Lost if the player is "Paper" and the comp is "Scissors"', ()=> {
      // Modify state to include the player selection and compSelection
      fakeState.playerSelection = 'Paper';
      fakeState.compSelection = 'Scissors';
      expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Lost');
    })
    // One for Waiting
    // One for a tied game

})
// Testing for AI selection
describe('Testing for AI selection', ()=> {
  // Happy Path
  // beforeEach(()=> {
  // })
  // Ai can make a selection
  test('AI is able to make a selection', ()=> {
    const arrayOfChoices = ["Rock", "Paper", "Scissors"]
    // Array of choices
    // We need a function that selects one of these at random
    const selectedChoice = robotSelection();
    // selectedChoice = Rock | Paper | Scissors
    expect(arrayOfChoices).toContain(selectedChoice)
  })
})
describe('Testing for cheat mode for AI', ()=> {
  // Happy Path
  // beforeEach(()=> {
  // })
  // Ai can make a selection
  test('given the player choice is Rock, and cheating is set to true, the Robot will select Paper', ()=> {
    // player selection
    // cheating mode
    const playerSelection = "Rock";
    const cheating = true;
    const result = robotSelection(cheating, playerSelection);
    expect(result).toBe("Paper")
  })
  test('given the player choice is Scissors, and cheating is set to true, the Robot will select Rock', ()=> {
    const playerSelection = "Scissors";
    const cheating = true;
    const result = robotSelection(cheating, playerSelection);
    expect(result).toBe("Rock")
  })
  test('given the player choice is Paper, and cheating is set to true, the Robot will select Scissors', ()=> {
    const playerSelection = "Paper";
    const cheating = true;
    const result = robotSelection(cheating, playerSelection);
    expect(result).toBe("Scissors")

  })
})

