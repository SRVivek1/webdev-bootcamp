function playAudio(key) {
  var audioFile = "";
  switch (key) {
    case "w":
      audioFile = "./sounds/crash.mp3";
      break;
    case "a":
      audioFile = "./sounds/kick-bass.mp3";
      break;
    case "s":
      audioFile = "./sounds/snare.mp3";
      break;
    case "d":
      audioFile = "./sounds/tom-1.mp3";
      break;
    case "j":
      audioFile = "./sounds/tom-2.mp3";
      break;
    case "k":
      audioFile = "./sounds/tom-3.mp3";
      break;
    case "l":
      audioFile = "./sounds/tom-4.mp3";
      break;
    default:
      console.log("No sound available for : " + key);

      break;
  }
  if (audioFile !== "") {
    let audio = new Audio(audioFile);
    audio.play();
  }
}

function handleClick() {
  const key = this.innerText.toLowerCase();
  playAudio(key);
}

//document.querySelector("button").addEventListener("click", handleClick);
//document.querySelector(".drum").addEventListener("click", handleClick);
const keys = document.querySelectorAll(".drum");

for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener("click", handleClick);
}

// listen to keypress
document.addEventListener("keydown", (event) => {
  playAudio(event.key.toLowerCase());
});
