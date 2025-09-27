let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let player={
    name:"Nikhil Nayak:",
    chips:145

}

function getRandomcard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else return randomNumber;
}

function startGame() {
    document.getElementById("player-el").textContent=player.name+" "+
"\u20B9"+player.chips
  let firstCard = getRandomcard();
  let secondCard = getRandomcard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  isAlive = true;
  hasBlackJack = false;
  renderGame();
}

function renderGame() {
  // document.getElementById("sum-el").textContent="Sum: "+sum
  document.querySelector("#sum-el").textContent = "Sum: " + sum;
  document.getElementById("card-el").textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    document.getElementById("card-el").textContent += cards[i] + " ";
  }

  if (sum <= 20) {
    message = "Do you want to draw a new card? ";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }

  document.getElementById("message-el").textContent = message;
}

function newCard() {
  if (isAlive == true && hasBlackJack == false) {
    let card = getRandomcard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

 