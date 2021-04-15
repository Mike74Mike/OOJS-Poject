class Phrase {
  constructor(phrase){
    this.phrase = phrase.toLowerCase();
  }

  /**
  * Display phrase on game board
  */
  addPhraseToDisplay(){
    const ul = document.querySelector('ul');
    const letters = this.phrase.split("")

    letters.forEach(letter=> {
      const li = document.createElement('li')
      ul.appendChild(li);
      li.textContent = letter.charAt(0);
      if(letter.charAt(0) === " "){
        li.classList.add('space')
      } else if(letter.length === 1 && letter.match(/[a-zA-Z]/i)){
        li.classList.add('hide', 'letter', letter.charAt(0))
      }

    })
  }
  /**
  * Checks if passed letter is in phrase
  * @param (string) letter - Letter to check
  */
  checkLetter(string){
    if(this.phrase.includes(string)){
      return true
    }else{
      return false
    }
  }
  /**
  * Displays passed letter on screen after a match is found
  * @param (string) letter - Letter to display
  */
  showMatchedLetter(string){
        const letters =document.querySelectorAll(`.${string}`)
        letters.forEach(letter =>{
          if(this.phrase.charAt(0)){
            if(letter.textContent === string){
            letter.classList.remove('hide');
            letter.classList.add('show')
          }
      }
        })
    }
  }
