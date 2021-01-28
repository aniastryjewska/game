
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
    card.childNodes[3].classList.remove("clicked")
    }
let infoCards = document.querySelectorAll(".info-card");
    for (let infoCard of infoCards) {
    infoCard.classList.add("hidden")}
    
    startGame()
}

function startGame() {
    let gameBoard = document.querySelector(".game-board");
    let newArrayOfShuffledCards = shuffleCards();
    for (let i = 0; i <newArrayOfShuffledCards.length; i++) {
        
    gameBoard.appendChild(newArrayOfShuffledCards[i]);
        }
        score = 0
    document.querySelector(".score").innerHTML = `🏆 SCORE: ${score}`
    }

function checkIfMatched() {setTimeout(function() {

  if (ArrayToCheckIfCardsMatch.length ===2){

    console.log(ArrayToCheckIfCardsMatch[0].innerHTML)
    console.log(ArrayToCheckIfCardsMatch[1].innerHTML)
    console.log(ArrayToCheckIfCardsMatch[0].id)
    console.log(ArrayToCheckIfCardsMatch[1].id)
    
    if ((ArrayToCheckIfCardsMatch[0].innerHTML === ArrayToCheckIfCardsMatch[1].innerHTML) && (ArrayToCheckIfCardsMatch[0].id !== ArrayToCheckIfCardsMatch[1].id)) {
        
        console.log("They match!!")
       
       let infoCards = document.querySelectorAll(".info-card");
       for (let infoCard of infoCards) {
       infoCard.classList.add("hidden")}

       if(ArrayToCheckIfCardsMatch[0].parentNode.id === "1") {
        let card = document.getElementById("card1");
         card.classList.remove("hidden")
     } else if(ArrayToCheckIfCardsMatch[0].parentNode.id === "2") {
        
        let card = document.getElementById("card2");
         card.classList.remove("hidden")
     } else if (ArrayToCheckIfCardsMatch[0].parentNode.id === "3"){
        
        let card = document.getElementById("card3");
         card.classList.remove("hidden")
     } else if (ArrayToCheckIfCardsMatch[0].parentNode.id === "4"){
        
        let card = document.getElementById("card4");
         card.classList.remove("hidden")
     } else if (ArrayToCheckIfCardsMatch[0].parentNode.id === "5"){
        
        let card = document.getElementById("card5");
         card.classList.remove("hidden")
     } else if (ArrayToCheckIfCardsMatch[0].parentNode.id === "6"){
       
        let card = document.getElementById("card6");
         card.classList.remove("hidden")
     } else if (ArrayToCheckIfCardsMatch[0].parentNode.id === "7"){
        
        let card = document.getElementById("card7");
         card.classList.remove("hidden")
     } else if (ArrayToCheckIfCardsMatch[0].parentNode.id === "8"){
        
        let card = document.getElementById("card8");
         card.classList.remove("hidden")
     } else if (ArrayToCheckIfCardsMatch[0].parentNode.id === "9"){
        
        let card = document.getElementById("card9");
         card.classList.remove("hidden")
     } else if (ArrayToCheckIfCardsMatch[0].parentNode.id === "10"){
        
        let card = document.getElementById("card10");
         card.classList.remove("hidden")
     } 

        ArrayToCheckIfCardsMatch[0].parentNode.classList.add("pair-matched");
        ArrayToCheckIfCardsMatch[1].parentNode.classList.add("pair-matched");
        ArrayToCheckIfCardsMatch[0].previousSibling.previousSibling.classList.remove("clicked");
        ArrayToCheckIfCardsMatch[1].previousSibling.previousSibling.classList.remove("clicked");
       
        increaseScore()
        
    } else {
        console.log("They don't match.")
        console.log(ArrayToCheckIfCardsMatch[0])
       
       ArrayToCheckIfCardsMatch[0].previousSibling.previousSibling.classList.remove("clicked")
       ArrayToCheckIfCardsMatch[1].previousSibling.previousSibling.classList.remove("clicked")
       decreaseScore()
       
    } 
    ArrayToCheckIfCardsMatch = []}}, 2500)}

function increaseScore() {
      score = score +4
   
      document.querySelector(".score").innerHTML = `🏆 SCORE: ${score}`

      let matchedPairs = document.querySelectorAll(".pair-matched");
             console.log(matchedPairs)

     if (matchedPairs.length >= 20) {
        setTimeout(function() {window.open("./win.html", "_self")}, 2000);
}}

function decreaseScore() {

    let matchedPairs = document.querySelectorAll(".pair-matched");
    if ((score>=8) || (matchedPairs.length >= 4)) {
        score = score-1
        document.querySelector(".score").innerHTML = `🏆 SCORE: ${score}`
    }

    if ((score <= 0) && (matchedPairs.length >= 2)) {
        setTimeout(function() {window.open("./lose.html", "_self")}, 2000);       
}}

function changeNoteColorAndPlaySound(){

    let clickedNotes = document.querySelectorAll(".clicked");
    if (clickedNotes.length < 2) {

    let Children = this.children;
    Children[1].classList.add('clicked');
    Children[2].play();
    
    if (ArrayToCheckIfCardsMatch.length <2) {
        ArrayToCheckIfCardsMatch.push(Children[2])}
    console.log(ArrayToCheckIfCardsMatch)
  
    checkIfMatched();
}}

window.addEventListener('load', () => {
    startGame()
     
    for (let card of noteCards) {
      card.addEventListener('click', changeNoteColorAndPlaySound)}
  
    document.querySelector(".restart-button").addEventListener('click', restartGame)
})


