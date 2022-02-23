function wrapLettersInSpan(className) {
    console.log("Every word into span");

    var textWrapper = document.querySelectorAll(className);
    
    if (textWrapper != null) {
        textWrapper.forEach(element => {
            console.log("Converting " + className + " sentences into letters captured by span");
            element.innerHTML = element.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        });
    }
}

function animate(textClass, emojiClass, animDelay=0) {
    runningAnimIn0 = anime.timeline({
        loop: false
    })
    .add({
        targets: textClass,
        opacity: 1,
        easing: "easeInOutQuad",
        duration: 1,
        delay: animDelay
    })
    .add({
        targets: textClass + ' .letter',
        opacity: [0,1],
        easing: "easeInOutQuad",
        duration: 1500,
        delay: (el, i) => 30 * (i+1)
    });

    runningAnimIn1 = anime({
        targets: emojiClass,
        opacity: [0,1],
        easing: "easeInOutQuad",
        duration: 400,
        delay: 1300 + animDelay
    })
}

function animateOut() {
    // Stop all running animations first
    runningAnimIn0.pause();
    runningAnimIn1.pause();
    runningAnimOut0.pause();
    runningAnimOut1.pause();


    runningAnimOut0 = anime.timeline({
        loop: false,
        complete: function(anim) {
            if (anim.began && anim.completed) {
                let content = getNextContent();
                changeTextContent("slide-text", content);
                wrapLettersInSpan('.slide-text');
                changeEmojiContentRandom('emoji');
                animate('.slide-text', '.emoji');
            }
        },
    })
    .add({
        targets: '.slide-text',
        opacity: 0,
        duration: 500,
        easing: "easeOutExpo",
        delay: 50
    });

    runningAnimOut0 = anime({
        targets: '.emoji',
        opacity: 0,
        easing: "easeInOutQuad",
        duration: 100,
        delay: 300
    });
}

function animateButton() {
    anime({
        targets: '#magic-button',
        scale: [1, 0.7, 1.3, 1],
        easing: "easeInOutQuad",
        duration: 300,
    })
}

function changeTextContent(className, content) {
    const textEl = document.getElementsByClassName(className);
    textEl[0].innerHTML = content;
}

function changeEmojiContentRandom(emojiClass) {
    const emoj = document.getElementsByClassName(emojiClass);
    emoj[0].innerHTML = emojis[getRandomIndex(emojis)];
}

function getRandomIndex(arr) {
    return Math.floor(Math.random()*arr.length);
}

function getNextContent() {

    console.log("Next content: " + contentIdx);

    // Fill array indices again if all elements are already shown
    if (contentIdx.length == 0) {
        contentIdx = Array.from(Array(contentText.length).keys());
    }

    // Get random index from content indices and delete from array (no duplicate show)
    let randomIdx = getRandomIndex(contentIdx);
    let content = contentText[contentIdx[randomIdx]];
    contentIdx.splice(randomIdx, 1); // 2nd parameter means remove one item only

    // Return content
    return content;
}

// ========================
// MAIN
// ========================
$(document).ready(function () {
    console.log("Document ready!");
    
    const btn = document.getElementById('magic-button');
    btn.onclick = function(){
        animateOut();
        animateButton();
    };
    
    // FOR YOU
    // This text can be changed when button is pressed (animate out calls animate again)
    wrapLettersInSpan(".slide-text");
    animate('.slide-text', '.emoji', 4500); // animate for you section

    // Show quote section for you background
    anime({
        targets: '.quote-section-for-you',
        opacity: 1,
        duration: 400,
        easing: "easeOutExpo",
        delay: 4000
    });

    // Show title for you
    wrapLettersInSpan(".slide-title-text");
    animate('.slide-title-text', '', 4200);

    // Show magic button with delay
    anime({
        targets: '#magic-button',
        opacity: 1,
        duration: 500,
        easing: "easeOutExpo",
        delay: 6000
    });
    
    
    // DAILY
    // Show daily
    wrapLettersInSpan(".title-text");
    wrapLettersInSpan(".daily-text");
    animate('.title-text', '', 500);

    changeEmojiContentRandom("daily-emoji")
    animate('.daily-text', '.daily-emoji', 1100);

});

// ========================
// Utils
// ========================
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// ========================
// GLOBALS
// ========================
var runningAnimIn0 = anime({});
var runningAnimIn1 = anime({});

var runningAnimOut0 = anime({});
var runningAnimOut1 = anime({});

var contentText = [
    "You deserve to be happy!",
    "You are beautiful!",
    "You are worthy to be loved!",
    "Love is all around you wherever you go!",
    "You are complete as you are, others simply support you!",
    "You are kind!",
    "Your smile is gorgeous!",
    "You shouldn't change for anyone!",
    "You are perfect as you are!",
    "You are loved and worthy!",
    "You are safe and surrounded by love and support!",
    "It's ok to make mistakes. We always learn!",
    "You are understood and your perspective is important!",
    "You are valued and helpful!",
    "You celebrate the good qualities in others and yourself!",
    "You have everything you need to succeed!",
    "You uplift your joy and the joy of others!",
    "Your feelings deserve names, deserve recognition, deserve to be felt!",
    "Your perspective is unique and important!",
    "Your pleasure does not require someone else's pain!",
    "Your sensitivity is beautiful, and your feelings and emotions are valid!",
    "There is something in this world that only you can do. That is why you are here!",
];

var contentIdx = Array.from(Array(contentText.length).keys());

var emojis = [
    '✨',
    '❤️',
    '❣️',
    '💝',
    '👸🏻',
    '🐨',
    '💖',
    '🍀',
    '😇',
    '💗',
    '🙊',
    '🙏🏽',
    '☀️'
];
