/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
 /**
 *@file An game using OOJS
 *@author - Michael
 */
 let game;
 const keys= document.querySelectorAll('.key');


 document.querySelector('#btn__reset').addEventListener('click', e =>{
    game = new Game();
    game.startGame()
 });


for(let i= 0; i<keys.length; i++){
    keys[i].addEventListener('click', e=>{
      game.handleInteraction(e.target)
    })
}
