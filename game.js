
//
let gamePattern = [];
let buttonColours = ["red", "blue", " green", "yellow"]
function nextSequence(){
    var randomNumber = Math.floor(Math.random() *4 );
    console.log(randomNumber);

    var randomChosenColor = buttonColours[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
}
nextSequence();

