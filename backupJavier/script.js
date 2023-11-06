
window.addEventListener("DOMContentLoaded", (event) => {
  const el = document.getElementById('test');

  const slider = document.querySelector('.nav-bar');
let isDown = false;
let startX;
let scrollLeft;

if (slider) {


// inicio funcion para voler arribar

const volverBtn = document.getElementById("volverBtn");

volverBtn.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth" // Hace que el desplazamiento sea suave
    });
});


// fin funcion volver arriba
// inicio personas talento 

const imagenes1 = document.querySelector('.imagenGeneral1');
const imagenes2 = document.querySelector('.imagenGeneral2');
const imagenes3 = document.querySelector('.imagenGeneral3');
const imagenes4 = document.querySelector('.imagenGeneral4');
const imagenes5 = document.querySelector('.imagenGeneral5');


const imagenGrandeURL1 = 'images/persona1_oscuro_grande.jpg';
const imagenGrandeURL2 = 'images/persona2_oscuro_grande.jpg';
const imagenGrandeURL3 = 'images/persona3_oscuro_grande.jpg';
const imagenGrandeURL4 = 'images/persona4_oscuro_grande.jpg';
const imagenGrandeURL5 = 'images/persona5_oscuro_grande.jpg';

const imagenChicaURL1 = 'images/persona1_oscuro_chica.jpg';
const imagenChicaURL2 = 'images/persona2_oscuro_chica.jpg';
const imagenChicaURL3 = 'images/persona3_oscuro_chica.jpg';
const imagenChicaURL4 = 'images/persona4_oscuro_chica.jpg';
const imagenChicaURL5 = 'images/persona5_oscuro_chica.jpg';

imagenes1.addEventListener('mouseenter', () => {
imagenes1.src = imagenGrandeURL1;
// imagenes1.style.width = '338px';
});

imagenes1.addEventListener('mouseleave', () => {
console.log("dasdas")
imagenes1.src = imagenChicaURL1;
// imagenes1.style.width = '200px';
});

imagenes2.addEventListener('mouseenter', () => {
imagenes2.src = imagenGrandeURL2;
// imagenes2.style.width = '338px';
});

imagenes2.addEventListener('mouseleave', () => {
imagenes2.src = imagenChicaURL2;
// imagenes2.style.width = '200px';
});

imagenes3.addEventListener('mouseenter', () => {
imagenes3.src = imagenGrandeURL3;
// imagenes3.style.width = '338px';
});

imagenes3.addEventListener('mouseleave', () => {
imagenes3.src = imagenChicaURL3;
// imagenes3.style.width = '200px';
});

imagenes4.addEventListener('mouseenter', () => {
imagenes4.src = imagenGrandeURL4;
// imagenes4.style.width = '338px';
});

imagenes4.addEventListener('mouseleave', () => {
imagenes4.src = imagenChicaURL4;
// imagenes4.style.width = '200px';
});

imagenes5.addEventListener('mouseenter', () => {
imagenes5.src = imagenGrandeURL5
// imagenes5.style.width = '338px';
});

imagenes5.addEventListener('mouseleave', () => {
imagenes5.src = imagenChicaURL5;
// imagenes5.style.width = '200px';
});

// fin personas talento 




  // inicio de animacion de iconos
var section3 = document.getElementById("section3");
var section3Title = document.getElementById("section3Title");
var section3Title2 = document.getElementById("section3Title2");
var boxCartas = document.getElementById("boxCartas");
var scrollDisabled = false;

window.addEventListener("scroll", function () {
if (scrollDisabled) {
  return;
}

var scrollPosition = window.scrollY || window.pageYOffset;

if (
  scrollPosition >= section3.offsetTop &&
  scrollPosition < section3.offsetTop + section3.offsetHeight
) {
  document.body.classList.add("no-scroll");
  section3.style.opacity = 1;
  scrollDisabled = true;
  section3Title.classList.remove("mensajeInical");
  section3Title.classList.add("mensaje");

  setTimeout(function () {
    section3Title2.classList.remove("mejorarInicial");
    section3Title2.classList.add("mejorarInicialVisible");

    setTimeout(function () {
      section3Title2.classList.add("desapareceGradual");

      setTimeout(function () {
        section3Title.classList.remove("mensaje");
        section3Title.classList.add("teEsperamoslVisible");

        setTimeout(function () {
          section3Title.classList.remove("teEsperamoslVisible");
          section3Title.classList.add("teEsperamoslVisible2");
          setTimeout(function () {
            boxCartas.classList.remove("boxCartas");
            boxCartas.classList.add("boxCartas1");
          }, 1000);
        }, 1000);
      }, 200);
    }, 1000);
  }, 1000);

  setTimeout(function () {
    document.body.classList.remove("no-scroll");
  }, 1000);
}
});

const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
const image = card.querySelector(".card-image");
const hoverImage = card.querySelector(".card-image-hover");

card.addEventListener("mouseover", () => {
  image.style.display = "none";
  hoverImage.style.display = "block";
});

card.addEventListener("mouseout", () => {
  image.style.display = "block";
  hoverImage.style.display = "none";
});
});



// Inicio script de tarjetas


const slides = document.querySelectorAll(".item");
  let current = 0;
  let prev = 3;
  let next = 1;
  let contador = 1;

    const gotoNum = number => {
    current = number;
    prev = current - 1;
    next = current + 1;
    

    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active2");
      slides[i].classList.remove("prev");
      slides[i].classList.remove("next");
      
    }

    if (next == 4) {
      next = 0;
    }

    if (prev == -1) {
      prev = 3;
    }

    slides[current].classList.add("active2");
    slides[next].classList.add("prev");
    slides[prev].classList.add("next");
    


  }
  function contar() {
  contador = contador % 4; 
  gotoNum(contador)
  contador++;
  }

  setInterval(contar, 2000); 


// Fin script de tarjetas



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

setInterval(nextSlideHeader, 5000);


// fin carousel del header





// inicio carousel de Oficinas


const slidesOficinas = document.querySelectorAll('.slideOficinas');
const indicatorsOficinas = document.querySelectorAll('.indicatorOficinas');
let currentslideOficinas = 0;

function showslideOficinas(n) {
slidesOficinas[currentslideOficinas].classList.remove('active');
indicatorsOficinas[currentslideOficinas].classList.remove('active');
currentslideOficinas = (n + slidesOficinas.length) % slidesOficinas.length;
slidesOficinas[currentslideOficinas].classList.add('active');
indicatorsOficinas[currentslideOficinas].classList.add('active');
}




// Itera sobre cada indicador y agrega un evento de click
indicatorsOficinas.forEach((indicator, index) => {
indicator.addEventListener('click', () => {
  showslideOficinas(index);
});
});

function nextslideOficinas() {
showslideOficinas(currentslideOficinas + 1);
}

setInterval(nextslideOficinas, 5000);


// fin carousel de Oficinas

// inicio indicadores circulares
const sliderindicatorCircular = document.querySelector('.sliderindicatorCircular');
const sliderindicatorCircularWrapper = document.querySelector('.sliderindicatorCircular-wrapper');
const indicatorCirculars = document.querySelectorAll('.indicatorCircular');

let slideIndex = 0;

function showSlide(n) {
const slidePosition = -(n * 25);
sliderindicatorCircularWrapper.style.left = slidePosition + '%';
indicatorCirculars.forEach((indicatorCircular, index) => {
  if (index === n) {
    indicatorCircular.classList.add('active-' + (index + 1));
  } else {
    indicatorCircular.classList.remove('active-' + (index + 1));
  }
});
}

indicatorCirculars.forEach((indicatorCircular, index) => {
indicatorCircular.addEventListener('click', () => {
  slideIndex = index;
  showSlide(slideIndex);
});
});

function nextSlide() {
slideIndex++;
if (slideIndex >= 4) {
  slideIndex = 0;
}
showSlide(slideIndex);
}

setInterval(nextSlide, 2000);

indicatorCirculars.forEach((indicatorCircular, index) => {
indicatorCircular.addEventListener('click', () => {
  slideIndex = index;
  showSlide(slideIndex);
});
});

showSlide(slideIndex);

// fin indicadores circulares
// inicio scroll horizontal
var contenedorPrincipalScroll = document.getElementById("scrollHorizontal");
var contenedorImagenScroll = document.getElementById("scrollHorizontal-imagen");
var btnIzquierda = document.getElementById("btn-izquierda");
var btnDerecha = document.getElementById("btn-derecha");

// agregado
var scrollVerticalEnabled = false;

// Evento de rueda para detectar el scroll vertical en el contenedor principal
contenedorPrincipalScroll.addEventListener("wheel", function(event) {
event.preventDefault();

// Si el scroll vertical está habilitado, realizar el scroll vertical del sitio
if (scrollVerticalEnabled) {
  window.scrollBy({
    top: event.deltaY,
  });
} else {
  // Si el scroll horizontal llegó al final, habilitar el scroll vertical
  if (contenedorImagenScroll.scrollLeft === contenedorImagenScroll.scrollWidth - contenedorPrincipalScroll.clientWidth) {
    scrollVerticalEnabled = true;
  }

  // Realizar el scroll horizontal mientras el scroll vertical está deshabilitado
  contenedorImagenScroll.scrollLeft += event.deltaY;

  // Si se regresó a la posición inicial del scroll horizontal, deshabilitar el scroll vertical
  if (contenedorImagenScroll.scrollLeft === 0) {
    scrollVerticalEnabled = true;
  }
}
});

// agegado
btnIzquierda.addEventListener("click", function() {
contenedorImagenScroll.scrollBy({
  left: -250,
  behavior: "smooth"
});
});

btnDerecha.addEventListener("click", function() {
contenedorImagenScroll.scrollBy({
  left: 250,
  behavior: "smooth"
});
});

contenedorImagenScroll.addEventListener("wheel", function(event) {
event.preventDefault();
contenedorImagenScroll.scrollLeft += event.deltaY;
});


// codgido para barra de barraAvance

var barraAvance = document.getElementById("barra-avanceScroll");

contenedorImagenScroll.addEventListener("scroll", function() {
var scrollWidth = contenedorImagenScroll.scrollWidth - contenedorPrincipalScroll.clientWidth;
var scrollPosition = contenedorImagenScroll.scrollLeft;
var progress = (scrollPosition / scrollWidth) * 79;

barraAvance.style.width = progress + "%";
if (progress >= 80) {
  scrollVerticalEnabled = true;
} else {
  scrollVerticalEnabled = false;
}
if (progress >= 100) {
  barraAvance.style.background = "orange";
} else {
  barraAvance.style.background = "linear-gradient(to right, #FA6400, #FFAB76)";
}
});
// fin scroll horizontal+

// prueba inicio



// prueba fin 

slider.addEventListener('mousedown', e => {
isDown = true;
slider.classList.add('active');
startX = e.pageX - slider.offsetLeft;
scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', _ => {
isDown = false;
slider.classList.remove('active');
});
slider.addEventListener('mouseup', _ => {
isDown = false;
slider.classList.remove('active');
});
slider.addEventListener('mousemove', e => {
if (!isDown) return;
e.preventDefault();
const x = e.pageX - slider.offsetLeft;
const SCROLL_SPEED = 3;
const walk = (x - startX) * SCROLL_SPEED;
slider.scrollLeft = scrollLeft - walk;

});



//circulos de indicacion de scroll
const circleScrollHotizontals = document.querySelectorAll(".circleScrollHotizontal");
const sections = document.querySelectorAll("section");
const outerCircle = document.querySelector(".circleScrollHotizontal-outer"); // Nuevo círculo exterior

document.addEventListener("scroll", () => {
const scrollPositionVertical = window.scrollY;

sections.forEach((section, index) => {
  const sectionTop = section.offsetTop;
  const sectionHeight = section.clientHeight;

  if (scrollPositionVertical >= sectionTop && scrollPositionVertical < sectionTop + sectionHeight) {
circleScrollHotizontals[index].classList.add("active");
} else {
circleScrollHotizontals[index].classList.remove("active");
}
});

// Actualizar el estado del círculo exterior según el círculo activo
const activeCircleIndex = Array.from(circleScrollHotizontals).findIndex(circle => circle.classList.contains("active"));
if (activeCircleIndex >= 0) {
outerCircle.style.top = `${activeCircleIndex * 24}px`;
outerCircle.style.display = "block";
} else {
outerCircle.style.display = "none";
}
});





// Fin circulos de indicacion de scroll



// inicio scripts mobile


// inicio carousel del header Mobile


const slidesHeaderMobile = document.querySelectorAll('.slideHeaderMobile');
const indicatorsMobile = document.querySelectorAll('.indicatorMobile');
let currentSlideHeaderMobile = 0;

function showSlideHeaderMobile(n) {
slidesHeaderMobile[currentSlideHeaderMobile].classList.remove('active');
indicatorsMobile[currentSlideHeaderMobile].classList.remove('active');
currentSlideHeaderMobile = (n + slidesHeaderMobile.length) % slidesHeaderMobile.length;
slidesHeaderMobile[currentSlideHeaderMobile].classList.add('active');
indicatorsMobile[currentSlideHeaderMobile].classList.add('active');
}

// Agrega el evento de clic a cada indicador
indicatorsMobile.forEach((indicatorMobile, indexMobile) => {
indicatorMobile.addEventListener('click', () => {
showSlideHeaderMobile(indexMobile);
});
});

function nextSlideHeaderMobile() {
showSlideHeaderMobile(currentSlideHeaderMobile + 1);
}

setInterval(nextSlideHeaderMobile, 5000);


// fin carousel del header Mobile




// Inicio script de tarjetas Mobile


const slidesMobile = document.querySelectorAll(".itemMobile");
let currentMobile = 0;
let prevMobile = 3;
let nextMobile = 1;
let contadorMobile = 1;

const gotoNumMobile = number => {
currentMobile = number;
prevMobile = currentMobile - 1;
nextMobile = currentMobile + 1;


for (let i = 0; i < slidesMobile.length; i++) {
  slidesMobile[i].classList.remove("active2");
  slidesMobile[i].classList.remove("prev");
  slidesMobile[i].classList.remove("next");
  
}

if (nextMobile == 4) {
  nextMobile = 0;
}

if (prevMobile == -1) {
  prevMobile = 3;
}

slidesMobile[currentMobile].classList.add("active2");
slidesMobile[nextMobile].classList.add("prev");
slidesMobile[prevMobile].classList.add("next");



}
function contarMobile() {
contadorMobile = contadorMobile % 4; 
gotoNumMobile(contadorMobile)
contadorMobile++;
}

setInterval(contarMobile, 2000); 


// Fin script de tarjetas


// inicio indicadores circulares Mobile
const sliderindicatorCircularMobile = document.querySelector('.sliderindicatorCircularMobile');
const sliderindicatorCircularWrapperMobile = document.querySelector('.sliderindicatorCircularMobile-wrapper');
const indicatorCircularsMobile = document.querySelectorAll('.indicatorCircularMobile');

let slideIndexMobile = 0;

function showSlideMobile(n) {
const slidePosition = -(n * 25);
sliderindicatorCircularWrapperMobile.style.left = slidePosition + '%';
indicatorCircularsMobile.forEach((indicatorCircular, index) => {
  if (index === n) {
    indicatorCircular.classList.add('active-' + (index + 1));
  } else {
    indicatorCircular.classList.remove('active-' + (index + 1));
  }
});
}

indicatorCircularsMobile.forEach((indicatorCircular, index) => {
indicatorCircular.addEventListener('click', () => {
  slideIndexMobile = index;
  showSlideMobile(slideIndexMobile);
});
});

function nextSlideMobile() {
slideIndexMobile++;
if (slideIndexMobile >= 4) {
  slideIndexMobile = 0;
}
showSlideMobile(slideIndexMobile);
}

setInterval(nextSlideMobile, 2000);

indicatorCircularsMobile.forEach((indicatorCircular, index) => {
indicatorCircular.addEventListener('click', () => {
  slideIndexMobile = index;
  showSlideMobile(slideIndexMobile);
});
});

showSlideMobile(slideIndexMobile);

// fin indicadores circulares



  // inicio scroll horizontal

// JavaScript
var contenedorImagenScrollMobile = document.getElementById("scrollHorizontal-imagenMobile");
var btnIzquierdaMobile = document.getElementById("btn-izquierdaMobile");
var btnDerechaMobile = document.getElementById("btn-derechaMobile");

var touchStartX = 0;
var touchMoveX = 0;
var scrollAmount = 450; // Ajusta el valor de desplazamiento según tus necesidades

btnIzquierdaMobile.addEventListener("click", function() {
   scrollToRight();
});

btnDerechaMobile.addEventListener("click", function() {
   scrollToLeft();
});

function scrollToRight() {
contenedorImagenScrollMobile.scrollBy({
    left: -scrollAmount,
    behavior: "smooth",
});
}

function scrollToLeft() {
contenedorImagenScrollMobile.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
});
}

contenedorImagenScrollMobile.addEventListener("scroll", function() {
updateProgressBar();
});


contenedorImagenScrollMobile.addEventListener("touchstart", function (event) {
   touchStartX = event.touches[0].clientX;
});

contenedorImagenScrollMobile.addEventListener("touchmove", function (event) {
   touchMoveX = event.touches[0].clientX;
});

contenedorImagenScrollMobile.addEventListener("touchend", function (event) {
var swipeThreshold = 100;
var deltaX = touchMoveX - touchStartX;

if (deltaX > swipeThreshold) {
    // Deslizar hacia la derecha
    scrollToRight();
} else if (deltaX < -swipeThreshold) {
    // Deslizar hacia la izquierda
    scrollToLeft();
}
});


function updateProgressBar() {
   // Actualizar la barra de avance
   var totalScrollWidth = contenedorImagenScrollMobile.scrollWidth - contenedorImagenScrollMobile.clientWidth;
   var currentScrollLeft = contenedorImagenScrollMobile.scrollLeft;
   var scrollPercentage = (currentScrollLeft / totalScrollWidth) * 80;
   document.getElementById("barra-avanceScrollMobile").style.width = scrollPercentage + "%";
}
  // fin scroll horizontal


  // inicio carousel de Oficinas


const slidesOficinasMobile = document.querySelectorAll('.slideOficinasMobile');
const indicatorsOficinasMobile = document.querySelectorAll('.indicatorOficinasMobile');
let currentslideOficinasMobile = 0;

function showslideOficinasMobile(n) {
slidesOficinasMobile[currentslideOficinasMobile].classList.remove('active');
indicatorsOficinasMobile[currentslideOficinasMobile].classList.remove('active');
currentslideOficinasMobile = (n + slidesOficinasMobile.length) % slidesOficinasMobile.length;
slidesOficinasMobile[currentslideOficinasMobile].classList.add('active');
indicatorsOficinasMobile[currentslideOficinasMobile].classList.add('active');
}




// Itera sobre cada indicador y agrega un evento de click
indicatorsOficinasMobile.forEach((indicator, indexMobile) => {
indicator.addEventListener('click', () => {
  showslideOficinasMobile(indexMobile);
});
});

function nextslideOficinasMobile() {
showslideOficinasMobile(currentslideOficinasMobile + 1);

}

setInterval(nextslideOficinasMobile, 5000);


// fin carousel de Oficinas




// inicio tarjetas de colores
for (let i = 1; i <= 5; i++) {
const ejesBoxColors = document.querySelector(".Ejes-BoxColors");
const imageChica = document.querySelector(`.imagen${i}`);
const imageChicaGrande = document.querySelector(`.imagen${i}Grande`);

imageChica.addEventListener("click", () => {
  // Oculta todas las imágenes grandes y chicas
  for (let j = 1; j <= 5; j++) {
    const otherImageChica = document.querySelector(`.imagen${j}`);
    const otherImageChicaGrande = document.querySelector(`.imagen${j}Grande`);
    
    if (i !== j) {
      otherImageChica.style.display = "block";
      otherImageChicaGrande.style.display = "none";
    }
  }

  // Muestra solo la imagen grande correspondiente
  imageChicaGrande.style.display = "block";
  imageChica.style.display = "none";
  ejesBoxColors.style.height = "1150px";
});

imageChicaGrande.addEventListener("click", () => {
  // Oculta la imagen grande actual
  imageChicaGrande.style.display = "none";

  // Restaura la visualización de la imagen chica correspondiente
  imageChica.style.display = "block";
  ejesBoxColors.style.height = "auto";
});
}

// fin tarjetas de colores





// inicio funcion para voler arribar

const volverBtnMobile = document.getElementById("volverBtnMobile");

volverBtnMobile.addEventListener("click", function() {

  window.scrollTo({
      top: 0,
      behavior: "smooth" // Hace que el desplazamiento sea suave
  });
});


// fin funcion volver arriba


}
});



