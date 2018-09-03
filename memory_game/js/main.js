console.log("Up and running!")

var cards = [{
rank:"Queen",
suit:"Hearts",
cardImage:"images/queen-of-hearts.png"
},
{rank:"Queen",
suit:"Diamonds",
cardImage:"images/queen-of-diamonds.png"
},
{
 rank:"King",
 suit:"Hearts",
 cardImage:"images/king-of-hearts.png"
},
{
 rank:"King",
 suit:"Diamonds",
 cardImage:"images/king-of-diamonds.png"
}
];
var cardsInPlay = [];





var checkForMatch = () => {

  if(cardsInPlay[0] == cardsInPlay[1]) {
    console.log("You found a match!");
}
  else {
    console.log("Sorry, try again.");
  }
}

var flipcard = function(){

	this.getAttribute("data-id")
    
	console.log("User flipped" + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit)
	checkForMatch();
    this.setAttribute('src', cards[cardId].cardImage);

  if(cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]){
  alert("you found a match");
}
else if(cardsInPlay.length === 1){
return;

}else {
  alert("Sorry, Try again");
}
  }

var gameBoard = function(){
	for(var i = 0; i < cards.length;i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipcard);
		document.getElementbyId("game-board").appendChild('cardElement');
	}
};
    
gameBoard();
    