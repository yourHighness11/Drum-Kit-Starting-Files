
// Detecting Button Press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

    function handleClick() {
        var buttonInnerHtml = this.innerHTML;
       doSound(buttonInnerHtml); 
       doAnimation(buttonInnerHtml);
    }
}

//detecting Keyboard Press
document.addEventListener("keydown",function (seekey) {
    doSound(seekey.key);        // key is the property
    doAnimation(seekey.key);
});

function doAnimation(keyBoom) {
    var myAnimation=document.querySelector("."+keyBoom);
    myAnimation.classList.add("pressed");
    setTimeout(function () {
    myAnimation.classList.remove("pressed");    
        
    },1000);
}

function doSound(keyBut) {
    switch (keyBut) {
        case "w":
            // for playing music
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;

        default:
            console.log(buttonInnerHtml);
    }

    
}




/*In JavaScript, the "this" keyword refers to an object.
    Which object depends on how this is being invoked (used or called).*/

/* direct method
    document.querySelector("button").addEventListener("click",function() {
    alert("baburao");    
});         */
