

function changeNoteColor(){
    console.log("I was clicked");
    console.log(this.children);

    let Children = this.children;
    Children[1].classList.toggle('clicked');
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

