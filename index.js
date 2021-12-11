
//? playing sound through mouse by pressing buttons on the screen
var length = document.querySelectorAll(".drum").length;
for (let i = 0; i < length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var element = this.innerHTML;
        soundPlayer(element);
        buttonAnimation(element);
    });
}

//? playing sound through keyboard
//** we are using keydown instead of keypress because keypress is deprecated now
//!document.addEventListener("keydown", function () {
//! when we pass event as a parameter inside this anonymous function it will give us
//! the details that which event has been triggered whether it is mouse event or keyboard event etc.
//! soundPlayer(event.key);
//! })
document.addEventListener("keydown", function (event) {
    soundPlayer(event.key);
    buttonAnimation(event.key);
})


const soundPlayer = (key) => {
    switch (key) {
        case 'w':
            playAudio("sounds/tom-1.mp3");
            break;
        case 'a':
            playAudio("sounds/tom-2.mp3");
            break;
        case 's':
            playAudio("sounds/tom-3.mp3");
            break;
        case 'd':
            playAudio("sounds/tom-4.mp3");
            break;
        case 'j':
            playAudio("sounds/snare.mp3");
            break;
        case 'k':
            playAudio("sounds/crash.mp3");
            break;
        case 'l':
            playAudio("sounds/kick-bass.mp3");
            break;
        default:
            console.log(key);
            break;
    }
}
const playAudio = (soundFile) => {
    var audio = new Audio(soundFile);
    audio.play();
}


const buttonAnimation = (currentKey) => {

    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);

}