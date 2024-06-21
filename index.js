
function playSound(key) {
    switch (key) {
        case 'w':
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            let kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case 'k':
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case 'l':
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        default:
            break;   
    }
}

function buttonAnimation(currentKey) {
    let activeButton = $(`.${currentKey}`);
    activeButton.addClass('pressed');
    setTimeout(function() {
        activeButton.removeClass('pressed');
    }, 100);
}


$(".drum").click (function() {
    var buttonInnerHTML = $(this).html();
    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
});

$(document).keydown(function(event) {
    var key = event.key;
    playSound(key);
    buttonAnimation(key);
});


