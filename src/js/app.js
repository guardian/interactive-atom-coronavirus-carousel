// js code here
import Swiper from "swiper";
// import Tracker from "ophan-tracker-js";
import 'ophan-tracker-js';


var swiper = new Swiper(".swiper-container", {
    pagination: {
        el: ".swiper-pagination"
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});


const feedbackBtn = document.querySelectorAll('.atom__button');
const feedbackBox = document.querySelector('.atom--snippet__feedback');

feedbackBtn.forEach((feedbackBtn) => {
    feedbackBtn.addEventListener('click', () => {
        feedbackBox.classList.add('submitted');
    })
});

setTimeout(() => {
    if (window.resize) {
        const html = document.querySelector('html')
        const body = document.querySelector('body')
        html.style.overflow = 'hidden'
        html.style.margin = '0px'
        html.style.padding = '0px'
        body.style.overflow = 'hidden'
        body.style.margin = '0px'
        body.style.padding = '0px'
        window.resize()
    }
}, 100)



// var isAndroidApp = (detect.isAndroid() && window.location.origin === "file://") ? true : false;
var androidclass = document.querySelector(".android");
var isAndroidApp = false;
if (!androidclass == undefined || null) {
    isAndroidApp = true;
}

if (isAndroidApp && window.GuardianJSInterface.registerRelatedCardsTouch) {

    i = 0;

    swiper.forEach(swipe => {
        var index = i;
        swiper[index].wrapperEl.addEventListener("touchstart", function () {
            window.GuardianJSInterface.registerRelatedCardsTouch(true);
        });
        swiper[index].wrapperEl.addEventListener("touchend", function () {
            window.GuardianJSInterface.registerRelatedCardsTouch(false);
        });
        i++;
    });



    var sliderEl = document.querySelector('.carousel-container');

    sliderEl.addEventListener("touchstart", function () {
        window.GuardianJSInterface.registerRelatedCardsTouch(true);
    });
    sliderEl.addEventListener("touchend", function () {
        window.GuardianJSInterface.registerRelatedCardsTouch(false);
    });
}




console.log('v1.3')