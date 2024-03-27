import prompt from "readline-sync";

    const compAnswer = Math.floor(Math.random() * 10) + 1;

    console.log("\nWelcome to the Guessing Game!\nPress ctrl+c to stop\n");
    
    let attempts = 0;

    let hasWon = false;

 while (hasWon === false) {
    const number = prompt.question("Please guess a number\n between 1 through 10:");
    attempts +1; 

     if(number === compAnswer) {
      console.log("You got it right!");
       hasWon = true;
      }

      else if(number > compAnswer){
      console.log("You guessed too high,\n try again!");
       hasWon = false;
      }

      else if(number < compAnswer){
      console.log("You guessed too low,\n try again!");
       hasWon = false;
      }

      else{
        console.log("Please enter a valid number!");
         hasWon = false;
      }


if (hasWon === true) {
    console.log("Congratulations,\n YOU WON!!");
}
else{
    console.log("Sorry, try again.");
}

 }

