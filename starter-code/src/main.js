var cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];

var clickedCards = [];
var clickedTurn = [];
var cardOne; var cardTwo;

$(document).ready(function(){
  var clickedCount = $('#pairs_clicked');
  var guessedCount = $('#pairs_guessed');
  var memoryGame = new MemoryGame(cards);
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);

  // Bind the click event of each element to a function
  $('.back').click(function () {
    // TODO: write some code here
    //Push Names of Cards only(for comparison's sake) and push the whole element to target its attributes
    if(clickedCards.length < 2) {clickedCards.push($(this).parent().attr('data-card-name'));clickedTurn.push($(this).parent());}
    else {clickedCards = []; clickedCards.push($(this).parent().attr('data-card-name'));clickedTurn = [];clickedTurn.push($(this).parent())}
    $(this).parent().children().toggleClass('back');
    $(this).parent().children().toggleClass('front');

    if (clickedCards.length == 2) {
      if(memoryGame.checkIfPair(clickedCards[0],clickedCards[1]) == true){memoryGame.pairsClicked+=1;memoryGame.pairsGuessed+=1;}
      else{memoryGame.pairsClicked+=1;setTimeout(function() {memoryGame.turnBack(clickedTurn)}, 500);}
    }//else{memoryGame.turnBack(clickedTurn)}
    // memoryGame.turnBack(clickedTurn);
    clickedCount.text(memoryGame.pairsClicked);
    guessedCount.text(memoryGame.pairsGuessed);
    memoryGame.isFinished();
  });
});


