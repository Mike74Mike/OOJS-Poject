class Phrase {
  constructor(phrase){
    this.phrase = phrase.toLowerCase();
  }
  addPhraseToDisplay(){
    const ul = document.querySelector('ul');
    const li = document.createElement('li')
    const letters = this.phrases.split("")

    for(const letter of letters){
      ul.appendChild(li);
      li.textContent = letter;
    }
  }
}
