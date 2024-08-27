const charmander = document.getElementById("buttonCharmander");
const bulbasaur = document.getElementById("buttonBulbasaur");
const squirtle = document.getElementById("buttonSquirtle");

///////////////////////////////////////////////////////////////////////////////////////////////
function overCharmander() {
    charmander.style.color = "#FF8C00";
    charmander.style.boxShadow = "1px 1px 10px #FF8C00"
    document.getElementById("charmanderImage").style.display = "none";
    document.getElementById("charmanderGif").style.display = "block";
}
function outCharmander() {
    charmander.style.color = "#ED2590";
    charmander.style.boxShadow = "none"
    document.getElementById("charmanderImage").style.display = "block";
    document.getElementById("charmanderGif").style.display = "none";
}
function chooseCharmander() {
    document.getElementById("charmanderSelect").style.display = "block";
    document.getElementById("bulbasaurSelect").style.display = "none";
    document.getElementById("squirtleSelect").style.display = "none";
}
charmander.addEventListener('click', () => {
    localStorage.clear();
    localStorage.setItem('chosen', 4);
})
///////////////////////////////////////////////////////////////////////////////////////////////
function overBulbasaur() {
    bulbasaur.style.color = "#00FF7F";
    bulbasaur.style.boxShadow = "1px 1px 10px #00FF7F"
    document.getElementById("bulbasaurImage").style.display = "none";
    document.getElementById("bulbasaurGif").style.display = "block";
}
function outBulbasaur() {
    bulbasaur.style.color = "#ED2590";
    bulbasaur.style.boxShadow = "none"
    document.getElementById("bulbasaurImage").style.display = "block";
    document.getElementById("bulbasaurGif").style.display = "none";

}
function chooseBulbasaur() {
    document.getElementById("charmanderSelect").style.display = "none";
    document.getElementById("bulbasaurSelect").style.display = "block";
    document.getElementById("squirtleSelect").style.display = "none";
}
bulbasaur.addEventListener('click', () => {
    localStorage.clear();
    localStorage.setItem('chosen', 1);
})
///////////////////////////////////////////////////////////////////////////////////////////////
function overSquirtle() {
    squirtle.style.color = "#00CED1";
    squirtle.style.boxShadow = "1px 1px 10px #00CED1"
    document.getElementById("squirtleImage").style.display = "none";
    document.getElementById("squirtleGif").style.display = "block";
}
function outSquirtle() {
    squirtle.style.color = "#ED2590";
    squirtle.style.boxShadow = "none"
    document.getElementById("squirtleImage").style.display = "block";
    document.getElementById("squirtleGif").style.display = "none";
}
function chooseSquirtle() {
    document.getElementById("charmanderSelect").style.display = "none";
    document.getElementById("bulbasaurSelect").style.display = "none";
    document.getElementById("squirtleSelect").style.display = "block";
}
squirtle.addEventListener('click', () => {
    localStorage.clear();
    localStorage.setItem('chosen', 7);
})

console.log(localStorage);