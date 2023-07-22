
window.addEventListener("DOMContentLoaded", (event) => {
    const el = document.getElementById('test');
  
    const slider = document.querySelector('.nav-bar');
let isDown = false;
let startX;
let scrollLeft;

if (slider) {






// inicio carousel del header


const slidesHeader = document.querySelectorAll('.slideHeader');
const indicators = document.querySelectorAll('.indicator');
let currentSlideHeader = 0;

function showSlideHeader(n) {
  slidesHeader[currentSlideHeader].classList.remove('active');
  indicators[currentSlideHeader].classList.remove('active');
  currentSlideHeader = (n + slidesHeader.length) % slidesHeader.length;
  slidesHeader[currentSlideHeader].classList.add('active');
  indicators[currentSlideHeader].classList.add('active');
}

// Agrega el evento de clic a cada indicador
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    showSlideHeader(index);
  });
});

function nextSlideHeader() {
  showSlideHeader(currentSlideHeader + 1);
}

setInterval(nextSlideHeader, 3600);


// fin carousel del header



}
});



