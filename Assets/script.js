const gameContainer = document.getElementById("game_container");
const startButton = document.getElementById("start_button");



var question = ""

document.getElementById("start_button").addEventListener("click", function(){
    gameContainer.style.display = "block";
    startButton.style.disply = "none";
});


function generateQuestion () {
gameContainer.textContent = question;

}