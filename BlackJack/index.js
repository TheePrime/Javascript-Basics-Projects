




let cards = []
let sum = 0
let hasBlackjack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

let player ={
  name: "Per",
 chips: 145
} 


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard(){
  let randomNumber =  Math.floor(Math.random() * 13) + 1

  if (randomNumber === 1){
    return 11
  }
  else if (randomNumber > 10){
    return 10
  }
  else {
    return randomNumber
  }
}



function startGame(){
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  sum = firstCard + secondCard
  cards =[firstCard, secondCard]
    renderGame()
}
function renderGame() {
  cardEl.textContent = "cards: "
  for (i =0 ; i < cards.length ; i++){
   
        cardEl.textContent += " " + cards[i]
    }
  sumEl.textContent = "Sum : " + sum;
  if (sum <= 20) {
    message = "Do you want to draw another card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackjack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }

  messageEl.textContent = message;
}



function newCard() {

  if (hasBlackjack=== false && isAlive === true){
    let card = getRandomCard();
    sum += card;
   cards.push(card)
   
    renderGame();
  }
 
  
}

