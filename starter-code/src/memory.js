class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards(cards) {
    for (let i = 0; i < cards.length-1; i++) {
      let j = (Math.floor(Math.random() * this.cards.length));
      let k = cards[i];
      cards[i] = cards[j];
      cards[k] = cards[i];
    }
  }
  checkIfPair(firstCard, secondCard) {
    return firstCard == secondCard;
    // if (firstCard == secondCard) {this.pairsClicked+=1; this.pairsGuessed+=1; return true}
    // else{this.pairsClicked+=1; return false;}
  }
  isFinished() {
    if (this.pairsGuessed == this.cards.length / 2) {alert(`Congratulations! You've won! GG!`)}
  }
  turnBack(array) {
    for (let i = 0; i < array.length; i++){
      $(array[i]).children().toggleClass('front');
      $(array[i]).children().toggleClass('back');
  }
  }
}

