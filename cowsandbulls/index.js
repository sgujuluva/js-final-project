// Bulls and Cows
// Get library for user input
// we need to keep the next line, so we can prompt the user for input
const prompt = require('prompt-sync')({ sigint: true });

// Test that prompt is working 
/* let name = prompt('What is your name? ');
console.log(`User's input is: ${name}`);
 */
 // Feel free to edit / remove the line above, this is just to test the package
//  Although we may want to use the user's name for something 


/* function generateRandomNumber(min,max){
    return Math.random() * (max - min) + min;
} */
function main() {
    console.log("Welcome to the game!");
    play();
  }
  
  function getNumber() {
    const array = [];
    while(array.length < 4){
    let r = Math.floor(Math.random() * 9 );
    if(r === 0 && array[0] === undefined){
        r = Math.floor(Math.random() * 9) +1 ;
        array.push(r)
    }else if(array.indexOf(r) === -1){
        array.push(r)
    }
    }
   // console.log(array)
    let res = (array.join(""));
   console.log(parseInt(res));
   return res;
    //return Number(res);
  }
  
  function getGuess() {
    const guess = prompt("Guess the random number: ");
    if(guess.length !== 4){
      console.log("Please enter a 4 digit number");
    }
    return (guess);
  }
 

  function play() {
    let numberToGuess = getNumber(); 
 
    while (true) {
      const guess = getGuess(); 
      if (guess === numberToGuess) {
        console.log("congratulations");
        const playAgain = prompt("Play again? Y/N ");
        if (playAgain.toLowerCase() === "y") {
          main();
        } else {
          console.log("thanks for playing");
          return;
        }
      }else { 
        let bull = 0;
        let cow = 0;   
        
        for ( let i = 0; i < guess.length; i++){


          for(let j = 0; j < numberToGuess.length; j++){
    
              if((numberToGuess[j] === guess[i]) && i === j){
                  bull++;
              
              }else if((numberToGuess[j] === guess[i]) && i !== j){
                  cow++;
              }
          }
        
      }
      
        /* console.log(`Your attempt was: ${guess}`);*/
        console.log("Wrong, try again.\n"); 
        console.log (`bull ${bull}`);
        console.log(`cow ${cow}`);
        }
     
      }
    }
  
  
  main();