/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
 /**
 *@file An game using OOJS
 *@author - Michael
 */
 class Game{
   constructor(){
     this.missed = 0;
     this.phrases = this.createPhrases();
     this.activePhrase = null;
   }

/**
* Creates phrases for use in game
* @return {array} An array of phrases that could be used in the game
*/

   createPhrases(){
     const quotes  =["Between a Rock and a Hard Place",
                    "Man of Few Words", "Read Em and Weep",
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
     this.activePhrase = this.getRandomPhrase()
     this.activePhrase.addPhraseToDisplay();
   }

/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
*                    won
*/
   checkForWin(){
     console.log(this.activePhrase.phrase)
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
    const gameId = document.querySelector('#game-over-message');

    if(tries[0].getAttribute('src') === 'images/liveHeart.png' && tries[1].getAttribute('src') === 'images/liveHeart.png'){
      tries[0].src =''
      tries[0].src= 'images/lostHeart.png';
      this.missed++
    }else if(tries[1].getAttribute('src') === 'images/liveHeart.png' && tries[0].getAttribute('src') === 'images/lostHeart.png'){
      tries[1].src =''
      tries[1].src= 'images/lostHeart.png';
      this.missed++
    }else if(tries[2].getAttribute('src') === 'images/liveHeart.png' && tries[1].getAttribute('src') === 'images/lostHeart.png'){
      tries[2].src =''
      tries[2].src= 'images/lostHeart.png';
      this.missed++
    }else if(tries[3].getAttribute('src') === 'images/liveHeart.png' && tries[2].getAttribute('src') === 'images/lostHeart.png'){
      tries[3].src =''
      tries[3].src= 'images/lostHeart.png';
      this.missed++
    }else if(tries[4].getAttribute('src') === 'images/liveHeart.png' && tries[3].getAttribute('src') === 'images/lostHeart.png'){
      tries[4].src =''
      tries[4].src= 'images/lostHeart.png';
      this.missed++
    }
    if(this.missed === 5){
      this.gameOver()
    }
  }
/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
  gameOver(gameWon){
    const tries = document.querySelectorAll('img');
    const gameId = document.querySelector('#game-over-message')
    const overlay = document.querySelector('.start');
    if(this.checkForWin() === gameWon){
      gameId.innerHTML ='Great job!'
      overlay.classList.add('win');
      overlay.style.display ='flex'
      game.resetBoard()
    }
    if(this.missed === 5){
       gameId.innerHTML = 'Sorry, better luck next time!'
       overlay.classList.add('lose');
       overlay.style.display ='flex';
       game.resetBoard()
   }
  }
  /**
  * Handles onscreen keyboard button clicks
  * @param (HTMLButtonElement) button - The clicked button element
  */
  handleInteraction(key) {
 if(game.activePhrase.checkLetter(key.textContent) === false || !game.activePhrase.phrase.includes(key.textContent)){
     key.classList.add('lose');
     game.removeLife();
 } if( game.activePhrase.showMatchedLetter(key.textContent) || game.activePhrase.checkLetter(key.textContent) === true || game.activePhrase.phrase.includes(key.textContent)){

       key.classList.add('chosen');

 }
 if(game.checkForWin()){
   game.gameOver(true);
  }
 }
/**
* Resets the board after gameOver()
*/
 resetBoard(){
   const phrase = document.querySelectorAll('#phrase ul li');
   for(let i = 0; i<phrase.length; i++){
     phrase[i].parentNode.removeChild(phrase[i]);
   }

   const button = document.querySelectorAll('.key')
   for(let i = 0; i<button.length; i++){
     if(button[i].classList.contains('chosen')){
       button[i].classList.remove('chosen');
     }
     if(button[i].classList.contains('lose')){
       button[i].classList.remove('lose');
     }
   }
   const img = document.querySelectorAll('img');
   for(let i = 0; i<img.length; i++){
     if(img[i].getAttribute('src') === 'images/lostHeart.png'){
       img[i].src = 'images/liveHeart.png'
     }
   }
 }
}
