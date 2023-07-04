// WEDDING SHOT SLIDESHOW
$(function () {
  var slide_index = 1;
  displaySlides(slide_index);
  function nextSlide() {
    displaySlides(slide_index++);
  }
  function prevslide() {
    displaySlides(slide_index--);
  }
  function displaySlides() {
    var i;
    var slides = document.getElementsByClassName("slides");
    if (slide_index > slides.length) {
      slide_index = 1;
    }
    if (slide_index < 1) {
      slide_index = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.opacity = 0;
    }
    slides[slide_index - 1].style.opacity = 1;
  }
  var next = document.getElementById("next");
  next.addEventListener("click", nextSlide);

  var prev = document.getElementById("prev");
  prev.addEventListener("click", prevslide);
});

// PORTRAIT SHOT SLIDESHOW
$(function () {
  var slide_index = 1;
  displaySlides(slide_index);
  function nextSlide() {
    displaySlides(slide_index++);
  }
  function prevslide() {
    displaySlides(slide_index--);
  }
  function displaySlides() {
    var i;
    var slides = document.getElementsByClassName("portrait-slides");
    if (slide_index > slides.length) {
      slide_index = 1;
    }
    if (slide_index < 1) {
      slide_index = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.opacity = 0;
    }
    slides[slide_index - 1].style.opacity = 1;
  }
  var next = document.getElementById("portrait-next");
  next.addEventListener("click", nextSlide);

  var prev = document.getElementById("portrait-prev");
  prev.addEventListener("click", prevslide);
});

// FASHION SHOT SLIDESHOW
$(function () {
  var slide_index = 1;
  displaySlides(slide_index);
  function nextSlide() {
    displaySlides(slide_index++);
  }
  function prevslide() {
    displaySlides(slide_index--);
  }
  function displaySlides() {
    var i;
    var slides = document.getElementsByClassName("fashion-slides");
    if (slide_index > slides.length) {
      slide_index = 1;
    }
    if (slide_index < 1) {
      slide_index = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.opacity = 0;
    }
    slides[slide_index - 1].style.opacity = 1;
  }
  var next = document.getElementById("fashion-next");
  next.addEventListener("click", nextSlide);

  var prev = document.getElementById("fashion-prev");
  prev.addEventListener("click", prevslide);
});

// BABY SHOT SLIDESHOW
$(function () {
  var slide_index = 1;
  displaySlides(slide_index);
  function nextSlide() {
    displaySlides(slide_index++);
  }
  function prevslide() {
    displaySlides(slide_index--);
  }
  function displaySlides() {
    var i;
    var slides = document.getElementsByClassName("baby-slides");
    if (slide_index > slides.length) {
      slide_index = 1;
    }
    if (slide_index < 1) {
      slide_index = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.opacity = 0;
    }
    slides[slide_index - 1].style.opacity = 1;
  }
  var next = document.getElementById("baby-next");
  next.addEventListener("click", nextSlide);

  var prev = document.getElementById("baby-prev");
  prev.addEventListener("click", prevslide);
});
