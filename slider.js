var slides = document.querySelector('.slides');

var totalSlides = document.querySelectorAll('.slides img').length;

var index = 0;

function changeSlidePosition() {
    slides.style.transform = `translateX(-${index * 100}%)`;
}

function goToNextSlide() {
    index = (index + 1) % totalSlides;
    changeSlidePosition();
}

function goToPreviousSlide() {
    index = (index - 1 + totalSlides) % totalSlides;
    changeSlidePosition();
}