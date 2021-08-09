const readline = require("readline-sync");

const dictionary = require("./dictionary");

const word = getRandomWord();
// This line of code gets a random word. The `word` variable will be a string.

let win = "You lived! Victory is yours! 👑 ";
//winning message
  
let lose = "Game Over. You're DEAD! 💀";
//losing message
  
let invalid = 'Invalid Entry!';
// invalid character entered
  
let repeat = 'Sorry, you already guessed that.';
// letter repetition

let wrong = 'Sorry, Wrong answer.'

let right = 'Great Job!'

function getRandomWord() {
  const index = Math.floor(Math.random() * dictionary.length);
  return dictionary[index];
}

function run(snowman) {
const underScore = []
//array that accounts for underscores
const guesses = []
//array that accounts for guesses
let validGuess = /^[A-Za-z]+$/;
// Ensures selects letters only

for(let i= 0; i < word.length; i++){
  underScore[i] = '_' 
  // underscore will represent hidden letters in their entirety. 
} 

let remainingLetters = word.length;

let lives = 10 ;
while(remainingLetters > 0 && lives > 0){
  console.log(underScore.join(' ')); 
  console.log(guesses.join(','))
  console.log(`Lives: ${lives}`);
  const userInput = readline.question("Guess a letter: ");
  // Intro: Tells them to guess a letter 
  
  if (guesses.includes(userInput)){
    console.log(repeat)
    console.log("THE USER INPUTTED:", userInput);
    // This line of code will print out if user repeats guess
    continue //if user uses letters only 
  }
  
  if (!userInput.match(validGuess)){
    console.log(invalid)
    console.log("THE USER INPUTTED:", userInput);
    // This line of code will print out whatever is inputted in by the user.
    continue //if user uses letters only 
  }
  for(let i =0; i < word.length; i++){
    //checking if the letter is within the word.
    if(userInput === word[i]){
      underScore[i] = userInput
      // if its in the code it adds it to the array. Will go through entire word and account for double letters. 
      remainingLetters--
    }
  }
  guesses.push(userInput);
  //This line of code pushes guesses into array
  if (!word.includes(userInput)){
    lives--
    console.log(invalid)
    //if it is not in the array it is invalid and continue
    continue
  } else {
    console.log(right)  
    //Shows correct response
    continue
    //returns to the game 
  } 
}
if (remainingLetters.join("") === word) { // If the player won
    console.log(win) // Offer a chance to continue
    const newGame = readline.question(`Try again? \n\n 'Y',  'N':`) 
    if (newGame === 'y') { // If the player wishes to continue
      console.log(`\nGood Luck Player!\n`)
      run()
    } else { // If No
      console.log(`\nThank you for playing!\n`)
    }
  }
  if (lives === 0) { // If the player lost
    console.log(lose)
    const reTry = readline.question(`Try again? \n\n 'Y',  'N':`) 
  }
  if (reTry === 'y') {
      console.log(`\nGood Luck Player!\n`)
      run()
  } else {
    console.log(`\nThank you for playing!\n`)
  }
}



 

/*
GAME STEPS: 

1. Intro message

2. Game displays hidden letters. 

3. Tell user they have 10 guesses. 

4. Game invites user to guess letters. 

5. Regex should check for valid entry if Valid play. If invalid alert invalid entry return to start question. 

6. Game alerts user to correct or incorrect answer.Game alerts user if something is a repeat selection.

7. Game displays guesses on screen. 

8. Game revals correct letters. 

9. Game accepts duplicate correct answers.  

11. Game alerts if incorrect answer deducting a point.

12. Game Loops until win or lose. 
/*
   PLAN TO CODE:

  STEP ONE: Create a WHILE LOOP that keeps track of guesses. Pertaining to Right and wrong answers. 
  Should say, while the answer is not incorrect & the wrong answers are less than or equal to 10 keep going. Should also account for previous wrong answers as this statement remains true. 
  OR ELSE:Return the answer is incorrect subtracting from the loop until it reaches zero. 

  STEP TWO: Create a condition for winning and losing. 
  If the count reaches 0 then Game Over you lose Return losing message. 
  If the answers are all correct then you win. Return winning message.  

  STEP THREE: Create a function that remembers previous guesses. 
  Should if already guessed should return error message that reports as such. 
  This should not subtract from points so probably should create some kind of guard for that edge case.

  STEP FOUR: Create a function that covers correct answers to the length of the entire word. Should allow user to guess until ready. *THIS MIGHT NOT BE NEEDED* 

  STEP FIVE: Should be able to push entire word from dictionary to hidden word. Should also push a random word each time. 

  STEP SIX: Create a loop that starts and ends the game. Should always return welcome selection at the beginning of the game and should always present a win/lose option looping to beginning When the game is finished.

  STEP SEVEN: Create a function or statement that accounts for repeated letters. This might be a string of some sort. May also be attached to the hidden words

  STEP EIGHT: Create a string of hidden letters that loop through the the word to find if its correct? I’m not sure if this is the right thing to do but the idea is if the words are correct      the letters should replace the under-score otherwise remain      the same. This would def include a .split([,]) array method to break up the letters. 

  STEP NINE: SELECTED LETTERS SHOULD BE CAPPED

  PSEUDO CODE IDEAS

  Alternate Question before game: 
  
  Do You want to build a snow man?

  if yes = "Warning, man eating snow man ahead. If you build a snow man you will die"

  else No = "Smart choice. Warning, man eating snowman ahead. If you build a snow man you will die. Good Luck!"

  If else statements

   *  - 'If Guess !== Incorrect keep going
   *     else return number of chances until zero' (This keeps score)
   *  - If 10 guesses stays the same
   *     else count -1 
   *    If guesses 0 returns "You lose"
   *    If guesses correct shows correct
   *    If guesses all correct "Congrats you won"
  
   * it should account for multiple letters
  
   * Should account for capitals and lower cases.
   
   *  ReGex SnowMan.ValidGuess = /[a-zA-Z]; 
  
   * Return Error message if number/not letter entered.
  
   * Add in underscore for blank spaces that match length.
   
   * Something that tells them what they already guessed. 
  
   * If guessing same letter return error.
  
   * If same letter is guessed count stays the same. 
  
   * If guess wrong letter twice doesn't take away returns error.
 
   * need .toUpperCase
   
   * .split([,]) - to break up letters
  
   * Loop to start and end the game keep doing it until it ends number
   
   * At the end of the game it should restart file. 
*/

run();