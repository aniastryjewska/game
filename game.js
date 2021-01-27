//window.onload = startGame();


let noteCards = document.getElementsByClassName("note-card");
let ArrayToCheckIfCardsMatch = []
let score = 0

function shuffleCards(){
    
    let shuffledCards = []
      for (i=0; shuffledCards.length<20; i++) {
           let randomNoteCard = noteCards[Math.floor(Math.random() * noteCards.length)];
           if (shuffledCards.indexOf(randomNoteCard) === -1) {
           shuffledCards.push(randomNoteCard) 
  }} return shuffledCards
}

function restartGame() {

for (let card of noteCards) {
    card.classList.remove("pair-matched")
    //console.log(card.childNodes)
    card.childNodes[3].classList.remove("clicked")
    }
    
    startGame()
}

function startGame() {
    let gameBoard = document.querySelector(".game-board");
    let newArrayOfShuffledCards = shuffleCards();
    for (let i = 0; i <newArrayOfShuffledCards.length; i++) {
        //console.log(gameBoard)
        //console.log(newArrayOfShuffledCards[i])
 gameBoard.appendChild(newArrayOfShuffledCards[i]);
        }
        score = 0
    document.querySelector(".score").innerHTML = `🏆 Score: ${score}`
    }

function checkIfMatched() {setTimeout(function() {
if (ArrayToCheckIfCardsMatch.length ===2){
    if ((ArrayToCheckIfCardsMatch[0].innerHTML === ArrayToCheckIfCardsMatch[1].innerHTML) &&(ArrayToCheckIfCardsMatch[0].id !== ArrayToCheckIfCardsMatch[1].id)) {
        console.log("They match!!")
       // console.log(ArrayToCheckIfCardsMatch[0].parentNode) -> works!!! <3
        ArrayToCheckIfCardsMatch[0].parentNode.classList.add("pair-matched")
        ArrayToCheckIfCardsMatch[1].parentNode.classList.add("pair-matched")

        appendInfoCard()
        increaseScore()
        



    } else {
        console.log("They don't match.")
        console.log(ArrayToCheckIfCardsMatch[0])
       // console.log(ArrayToCheckIfCardsMatch[0].previousSibling.previousSibling)
       ArrayToCheckIfCardsMatch[0].previousSibling.previousSibling.classList.remove("clicked")
       ArrayToCheckIfCardsMatch[1].previousSibling.previousSibling.classList.remove("clicked")
       decreaseScore()
       
    } 
    ArrayToCheckIfCardsMatch = []}}, 2500)}

function increaseScore() {
      score = score +4
document.querySelector(".score").innerHTML = `🏆 Score: ${score}`

let matchedPairs = document.querySelectorAll(".pair-matched");
    console.log(matchedPairs)

    if ((score >= 16) || (matchedPairs.length >= 12)) {
      alert("You win!");
      restartGame()
}
}

function decreaseScore() {

    let matchedPairs = document.querySelectorAll(".pair-matched");
    if ((score>=8) || (matchedPairs.length >= 4)) {
        score = score-1
        document.querySelector(".score").innerHTML = `🏆 Score: ${score}`
    }

    if ((score <= 0) && (matchedPairs.length >= 2)) {
        alert("You lose!");
        restartGame()
  }
}

function changeNoteColorAndPlaySound(){
    //console.log("I was clicked");
    //console.log(this.children);

    let Children = this.children;
    Children[1].classList.add('clicked');
    Children[2].play();
    
    if (ArrayToCheckIfCardsMatch.length <2) {
        ArrayToCheckIfCardsMatch.push(Children[2])}
    console.log(ArrayToCheckIfCardsMatch)
    checkIfMatched();
    
    
}

window.addEventListener('load', () => {
    startGame()
     
for (let card of noteCards) {
    card.addEventListener('click', changeNoteColorAndPlaySound)}
  
document.querySelector(".restart-button").addEventListener('click', restartGame)
})

function appendInfoCard() {}
