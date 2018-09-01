console.log("Up and running!")

var cards = ["Queen","Queen","King","King"];
var cardsInPlay = [];


		var cardOne = cards[0];
		cardsInPlay.push("cardOne");

		var cardTwo = cards[1];
		cardsInPlay.push("cardTwo");
	
		var cardThree = cards[2];
		cardsInPlay.push("cardThree");

		var cardFour = cards[3];
		cardsInPlay.push("cardFour");
	


for(i = 0; i < cardsInPlay.length;i++){
  console.log("User fliped " + cards[i])
};

if (cardsInPlay.length ===2 && cards[0] === cards[1]|| cards[2]=== cards [3]){
  alert("Congrats you found a match");
}

else{
    alert("Try Again!");
    }
