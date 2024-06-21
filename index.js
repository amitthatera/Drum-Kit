
function playSound(key) {
    let soundMap = {
        'w': 'tom-1.mp3',
        'a': 'tom-2.mp3',
        's': 'tom-3.mp3',
        'd': 'tom-4.mp3',
        'j': 'kick-bass.mp3',
        'k': 'snare.mp3',
        'l': 'crash.mp3'
    };
    
    let soundFile = soundMap[key];
    if (soundFile) {
        let audio = new Audio('sounds/' + soundFile);
        audio.play();
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


