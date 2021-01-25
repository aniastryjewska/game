

function changeNoteColor(){
    console.log("I was clicked");
    console.log(this);

    this.classList.toggle('clicked');
}

window.addEventListener('load', () => {
let noteCards = document.getElementsByClassName("note-card");
for (let card of noteCards) {
    card.addEventListener('click', changeNoteColor)
}
})

/*
noteCards.forEach(card => card.addEventListener('click', changeNoteColor))
*/

