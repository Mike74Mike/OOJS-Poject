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
     const letters = document.querySelectorAll('.letter')
     const hideLetters =document.querySelectorAll('.hide')
      for(let i = 0; i< letters.length; i++){
        if(hideLetters.length === 0){
          return true
      } else {
        return false
      }
    }
  }

  removeLife(){
    const tries = document.querySelectorAll('img');
    tries[0].src =''
    tries[0].src= 'images/lostHeart.png'

    if(tries[0].src){
      tries[1].src = ''
      tries[1].src ='images/lostHeart.png'
    }else if(tries[1].src){
      tries[2].nextSiblingElement.src ='images/lostHeart.png'
    }else if(tries[2].src ==='images/lostHeart.png'){
      tries[2].nextSiblingElement.src ='images/lostHeart.png'
    }else if(tries[3].src ==='images/lostHeart.png'){
      tries[3].nextSiblingElement.src ='images/lostHeart.png'
    }else if(tries[4].src ==='images/lostHeart.png'){
      tries[4].nextSiblingElement.src ='images/lostHeart.png'
    }
  }
 }
