/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
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
     const phrase =["Between a Rock and a Hard Place",
                    "Man of Few Words", " Read 'Em and Weep",
                    "Flea Market", "A Piece of Cake"];
    return phrase;
}

/**
 * Selects random phrase from phrases property
 * @return {Object} Phrase object chosen to be used
 */
   getRandomPhrase(){
       const i= Math.floor(Math.Random * this.phrases.length)
       return this.phrases[i]
   }
 }
