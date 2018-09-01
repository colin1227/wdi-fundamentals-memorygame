console.log("Up and running!")

var cards = ["Queen","Queen","King","King"];
var cardsInPlay = [];





var checkForMatch = () => {

  if(cardsInPlay[0] == cardsInPlay[1]) {
    console.log("You found a match!");
}
  else {
    console.log("Sorry, try again.");
  }
}

var flipcard = function(cardId){
	
	console.log("User flipped" + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();

  if(cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]){
  alert("you found a match");
}
else if(cardsInPlay.length === 1){
return;

}else {
  alert("Sorry, Try again");
}
  }


flipcard(0);
flipcard(2);


    

    