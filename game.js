//window.onload = startGame();


let noteCards = document.getElementsByClassName("note-card");
let ArrayToCheckIfCardsMatch = []

function shuffleCards(){
    
    let shuffledCards = []
      for (i=0; shuffledCards.length<20; i++) {
           let randomNoteCard = noteCards[Math.floor(Math.random() * noteCards.length)];
           if (shuffledCards.indexOf(randomNoteCard) === -1) {
           shuffledCards.push(randomNoteCard) 
  }} return shuffledCards
}

function startGame() {
    let gameBoard = document.querySelector(".game-board");
    let newArrayOfShuffledCards = shuffleCards();
    for (let i = 0; i <newArrayOfShuffledCards.length; i++) {
        //console.log(gameBoard)
        //console.log(newArrayOfShuffledCards[i])
 gameBoard.appendChild(newArrayOfShuffledCards[i]);
        }
    }

function checkIfMatched() {
    // console.log("oh shit") -> works
    // console.log(this) -> doesn't work, logs the whole window
if (ArrayToCheckIfCardsMatch.length ===2){
    if (ArrayToCheckIfCardsMatch[0] === ArrayToCheckIfCardsMatch[1]) {
        console.log("They match!!")
       // console.log(ArrayToCheckIfCardsMatch[0].parentNode) -> works!!! <3
        ArrayToCheckIfCardsMatch[0].parentNode.classList.add("pair-matched")
        ArrayToCheckIfCardsMatch[1].parentNode.classList.add("pair-matched")
        
    } else {
        console.log("They don't match.")
        console.log(ArrayToCheckIfCardsMatch[0])
       // console.log(ArrayToCheckIfCardsMatch[0].previousSibling.previousSibling)
       ArrayToCheckIfCardsMatch[0].previousSibling.previousSibling.classList.remove("clicked")
       ArrayToCheckIfCardsMatch[1].previousSibling.previousSibling.classList.remove("clicked")
    } 

    ArrayToCheckIfCardsMatch = []}
}

setTimeout(checkIfMatched, 2000);

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
    
    //document.getElementById('audio_play').play()
   // audio2.play();
}

window.addEventListener('load', () => {
    startGame()
let noteCards = document.getElementsByClassName("note-card");
for (let card of noteCards) {
    card.addEventListener('click', changeNoteColorAndPlaySound)
}
})
