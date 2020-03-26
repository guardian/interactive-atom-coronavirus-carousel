// js code here
import Swiper from "swiper";
import "ophan-tracker-js";
import template from "./../templates/main.html";
const contentFrame = document.getElementById("gd-carousel");
contentFrame.innerHTML = template;

var swiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

const feedbackBtn = document.querySelectorAll(".atom__button");
const feedbackBox = document.querySelector(".atom--snippet__feedback");

feedbackBtn.forEach(feedbackBtn => {
  feedbackBtn.addEventListener("click", () => {
    feedbackBox.classList.add("submitted");
  });
});


// resize
setTimeout(() => {
  if (window.resize) {
    const html = document.querySelector("html");
    const body = document.querySelector("body");
    html.style.overflow = "hidden";
    html.style.margin = "0px";
    html.style.padding = "0px";
    body.style.overflow = "hidden";
    body.style.margin = "0px";
    body.style.padding = "0px";
    window.resize();
  }
}, 100);


// Add URL to datalinkname
var urlGetter = window.parent.location;

var nextButton = document.querySelector(".swiper-button-next");
var prevButton = document.querySelector(".swiper-button-prev")
nextButton.setAttribute(
  "data-link-name",
  "corona shopping carousel : next-arrow : " + urlGetter
);
prevButton.setAttribute(
  "data-link-name",
  "corona shopping carousel : prev-arrow : " + urlGetter
)

var thumbsUp = document.querySelector(".js-thumbs-up");
var thumbsDown = document.querySelector(".js-thumbs-down");
thumbsUp.setAttribute(
  "data-link-name",
  "corona shopping carousel : thumbs-up : " + urlGetter
);
thumbsDown.setAttribute(
  "data-link-name",
  "corona shopping carousel : thumbs-down : " + urlGetter
);

console.log(urlGetter);


// disable swipe on android
var isAndroidApp =
  detect.isAndroid() && window.location.origin === "file://" ? true : false;
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

  var sliderEl = window.parent.document.querySelector("body");

  sliderEl.addEventListener("touchstart", function () {
    window.GuardianJSInterface.registerRelatedCardsTouch(true);
  });
  sliderEl.addEventListener("touchend", function () {
    window.GuardianJSInterface.registerRelatedCardsTouch(false);
  });
}

console.log("v1.7");