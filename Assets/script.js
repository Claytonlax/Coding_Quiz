const gameContainer = document.getElementById("game_container");
const startButton = document.getElementById("start_button");



var question = ""
var guess = ""

document.getElementById("start_button").addEventListener("click", function(){
    gameContainer.style.display = "block";
    startButton.style.disply = "none";

    generateQuestion();
});


function generateQuestion () {
gameContainer.textContent = question;

}

document.addEventListener("click", function(event) {
    var guess = event.location;
})


