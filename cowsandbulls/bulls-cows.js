let guessNumber = "1234";
let randomNumber = "7430";

/* let arrayGuess =  Array.from(String(guessNumber), Number);
console.log(arrayGuess)

let arrayRandom =  Array.from(String(randomNumber), Number);
console.log( arrayRandom)
 */
let bull = 0;
let cow = 0;
 for ( let i = 0; i < guessNumber.length; i++){

     for(let j = 0; j < randomNumber.length; j++){

         if((randomNumber[j] === guessNumber[i]) && i === j){
             bull++;
         
         }else if((randomNumber[j] === guessNumber[i]) && i !== j){
             cow++;
         }
     }
  
 }
 console.log(`bull ${bull}`)
 console.log(`cow ${cow}`)



