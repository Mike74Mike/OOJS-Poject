/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const keys= document.querySelectorAll('.key');

 let game = new Game();

 document.querySelector('#btn__reset').addEventListener('click', e =>{


   game.startGame()
  e.preventDefault()
 });

  keys.forEach(key => {
    key.addEventListener('click', function handleInteraction(e) {
    if(game.activePhrase.checkLetter(e.target.textContent) === false || !game.activePhrase.phrase.includes(e.target.textContent)){
        e.target.classList.add('lose');
        game.removeLife();
    } if( game.activePhrase.showMatchedLetter(e.target.textContent) || game.activePhrase.checkLetter(e.target.textContent) === true || game.activePhrase.phrase.includes(e.target.textContent)){

          e.target.classList.add('chosen');

    }
    if(game.checkForWin()){

    }
  })
})
