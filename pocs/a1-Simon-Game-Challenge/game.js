const buttonColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];

let isStarted = false;
let level = 0;

$(document).keypress(function () {
  if (!isStarted) {
    isStarted = true;
    $("#level-title").text("Level " + level);
    nextSequence();
  }
});

// Button clicked
$(".btn").click(function () {
  const userChoosenColor = $(this).attr("id"); //event.target.id;
  userClickedPattern.push(userChoosenColor);

  playSound(userChoosenColor);
  animatePress(userChoosenColor);

  checkAnswer(userClickedPattern.length-1);
});


function checkAnswer(currentLevel) {
    console.log("Game pattern: " + gamePattern);
    console.log("User cliced pattern: " + userClickedPattern);
    
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if(userClickedPattern.length === gamePattern.length) {
            setTimeout(() => {
                nextSequence();
            }, 1000);
        }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game over, press any key to restart.");

        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);
    }
}

function nextSequence() {
  level++;
  $("#level-title").text("Level " + level);

  const randomNumber = Math.floor(Math.random() * 4);
  const randomChoosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChoosenColor);

  $("#" + randomChoosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChoosenColor);
}

function playSound(name) {
  var audio = new Audio("./sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");

  setTimeout(() => {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
