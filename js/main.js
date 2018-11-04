console.log("Up and running!")

var cards = [{
rank:"Queen",
suit:"Hearts",
cardImage:"images/images/queen-of-hearts.png"
},
{rank:"Queen",
suit:"Diamonds",
cardImage:"images/images/queen-of-diamonds.png"
},
{
 rank:"King",
 suit:"Hearts",
 cardImage:"images/images/king-of-hearts.png"
},
{
 rank:"King",
 suit:"Diamonds",
 cardImage:"images/images/king-of-diamonds.png"
}
];
var cardsInPlay = [];
var button = document.getElementById("but");


var noMatch = function(){
	alert("Sorry, Try again");
};

var foundMatch = function(){
  alert("you found a match");
};



var checkForMatch = () => {

  if(cardsInPlay[0] == cardsInPlay[1]) {
    console.log("You found a match!");
}
  else {
    console.log("Sorry, try again.");
  }
};


var reset = () => {
for (var i = 0; i < cards.length; i++) {
 
 document.getElementById('game-board').removeChild(cardElement);
 var newCard = document.createElement("img");
 newCard.src ="images/images/back.png";
 newCard.setAttribute('data-id', i);
 newCard.addEventListener('click', flipcard);
 document.getElementById('game-board').appendChild(newCard);
  };
};
var flipcard = function(){
   
  var cardId = this.getAttribute("data-id")
  console.log("User flipped" + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit)
  checkForMatch();
  this.setAttribute('src', cards[cardId].cardImage);

  if(cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]){
  setTimeout(foundMatch,2000);
  cardsInPlay = [];
  }
  else if(cardsInPlay.length === 1){
  return;
  }else {
    setTimeout(noMatch,2000);
    cardsInPlay = [];
  };
};
       
  for(var i = 0; i < cards.length;i++){
		
    var cardElement = document.createElement('img');
	cardElement.src = "images/images/back.png";
	cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipcard);
    button.addEventListener("click", reset, true);
    document.getElementById('game-board').appendChild(cardElement);
	};

