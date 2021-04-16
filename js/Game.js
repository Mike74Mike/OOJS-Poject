/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
 class Game{
   constructor(){
     this.missed = 0;
     this.phrases = this.createPhrases();
     this.activePhrase = this.getRandomPhrase();
   }

/**
* Creates phrases for use in game
* @return {array} An array of phrases that could be used in the game
*/

   createPhrases(){
     const quotes  =["Between a Rock and a Hard Place",
                    "Man of Few Words", "Read 'Em and Weep",
                    "Flea Market", "A Piece of Cake"];

     const filterQuote = quotes.map(quote => new Phrase(quote));
     return filterQuote;
}

/**
 * Selects random phrase from phrases property
 * @return {Object} Phrase object chosen to be used
 */
   getRandomPhrase(){

       const i= Math.floor(Math.random() * this.phrases.length)
       return this.phrases[i];

   }
/**
* Begins game by selecting a random phrase and displaying it to user
*/
   startGame(){
     const overlay= document.querySelector('#overlay');
     overlay.style.display = 'none';
     this.getRandomPhrase().addPhraseToDisplay();
   }

/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
*                    won
*/
   checkForWin(){
     const letters = document.querySelectorAll('.letter');
     const hideLetters =document.querySelectorAll('.hide');
      for(let i = 0; i< letters.length; i++){
        if(hideLetters.length === 0){
          return true
      } else {
        return false
      }
    }
  }

  /**
  * Increases the value of the missed property
  * Removes a life from the scoreboard
  * Checks if player has remaining lives and ends game if player is out
  */

  removeLife(){
    const tries = document.querySelectorAll('img');
    const overlay = document.querySelector('.start');

    if(tries[0].getAttribute('src') === 'images/liveHeart.png' && tries[1].getAttribute('src') === 'images/liveHeart.png'){
      tries[0].src =''
      tries[0].src= 'images/lostHeart.png';
    }else if(tries[1].getAttribute('src') === 'images/liveHeart.png' && tries[0].getAttribute('src') === 'images/lostHeart.png'){
      tries[1].src =''
      tries[1].src= 'images/lostHeart.png';
    }else if(tries[2].getAttribute('src') === 'images/liveHeart.png' && tries[1].getAttribute('src') === 'images/lostHeart.png'){
      tries[2].src =''
      tries[2].src= 'images/lostHeart.png';
    }else if(tries[3].getAttribute('src') === 'images/liveHeart.png' && tries[2].getAttribute('src') === 'images/lostHeart.png'){
      tries[3].src =''
      tries[3].src= 'images/lostHeart.png';
    }else if(tries[4].getAttribute('src') === 'images/liveHeart.png' && tries[3].getAttribute('src') === 'images/lostHeart.png'){
      tries[4].src =''
      tries[4].src= 'images/lostHeart.png';
    }  if(tries[4].getAttribute('src') === 'images/lostHeart.png'){
        overlay.style.backgroundColor ='#ff8c00'
        overlay.style.display ='block'
        overlay.innerHTML =`<h2 class="title">Phrase Hunter</h2>
				                    <h1 id="game-over-message">Sorry, better luck next time!</h1>
				                    <button id="btn__reset">Start Game</button>`
    }
  }
/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
  gameOver(gameWon){
    if(this.checkForWin() === gameWon){
      const overlay = document.querySelector('.start');
      overlay.style.display ='block'
      overlay.style.backgroundColor ='#77DD77'
      overlay.innerHTML =`<h2 class="title">Phrase Hunter</h2>
				                  <h1 id="game-over-message">Great Work</h1>
				                  <button id="btn__reset">Start Game</button>`
    }
  }
}
