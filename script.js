// // Utility delay function
// async function delay(delayInms) {
//     return new Promise(resolve  => {
//       setTimeout(() => {
//         resolve(2);
//       }, delayInms);
//     });
// }

// // Wrap every letter in a span
// async function wrapTextForAnimation() {
//     let delayTime = 1000; // 1s
//     let delayres = await delay(delayTime);

//     console.log("Animation script running!");

//     var textWrapper = document.querySelector('.slide-text');
//     if (textWrapper != null) {
//         console.log("Found .slide-text element");

//         textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
//     }
// }

// wrapTextForAnimation();

$(document).ready(function () {
    // console.log("Document ready!");

    // console.log("Every word into span");
    // var textWrapper = document.querySelectorAll('.slide-text');
    
    // console.log(textWrapper);

    // if (textWrapper != null) {
    //     textWrapper.forEach(element => {
    //         console.log("Converting .slide-text sentences into letters captured by span");
    //         element.innerHTML = element.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    //     });
    // }

    // let index2class = {0: '.first', 1: '.second', 2: '.third'};

    // $('#myCarousel').on('slide.bs.carousel', function (e) {
        // console.log("Slide finished!");
        
        // var prevSlide = index2class[e.from];
        // var currSlide = index2class[e.to];
        
        // console.log("Prev slide: " + prevSlide);
        // console.log("Curr slide: " + currSlide);
        
        // let targetsToHide0 = '.slide-text' + prevSlide;
        // let targetsToHide1 = '.slide-text' + prevSlide + ' .letter';
        
        // let targetsToShow0 = '.slide-text' + currSlide;
        // let targetsToShow1 = '.slide-text' + currSlide + ' .letter';

        // anime.timeline({loop: false})
        // .add({
        //     targets: targetsToHide0,
        //     opacity: [0],
        //     easing: "easeInOutQuad",
        //     duration: 1,
        // })
        // .add({
        //     targets: targetsToHide1,
        //     opacity: [0],
        //     easing: "easeInOutQuad",
        //     duration: 1,
        // })

        // .add({
        //     targets: targetsToShow0,
        //     opacity: [0,1],
        //     easing: "easeInOutQuad",
        //     duration: 100,
        // })
        // .add({
        //     targets: targetsToShow1,
        //     opacity: [0,1],
        //     easing: "easeInOutQuad",
        //     duration: 2250,
        //     delay: (el, i) => 150 * (i+1)
        // }); 
        // .add({
        //     targets: '.slide-text',
        //     opacity: 0,
        //     duration: 1000,
        //     easing: "easeOutExpo",
        //     delay: 1000
        // });
    // })

});