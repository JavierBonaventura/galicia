
window.addEventListener("DOMContentLoaded", (event) => {
  const el = document.getElementById('test');

  const slider = document.querySelector('.nav-bar');
let isDown = false;
let startX;
let scrollLeft;

if (slider) {



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
indicatorsMobile.forEach((indicatorMobile, index) => {
indicatorMobile.addEventListener('click', () => {
  showSlideHeaderMobile(index);
});
});

function nextSlideHeaderMobile() {
showSlideHeaderMobile(currentSlideHeaderMobile + 1);
}

setInterval(nextSlideHeaderMobile, 3600);


// fin carousel del header Mobile




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
      indicatorCircular.classList.add('active');
    } else {
      indicatorCircular.classList.remove('active');
    }
  });
}

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
        behavior: "smooth"
      });
    } else {
      // Si el scroll horizontal llegó al final, habilitar el scroll vertical
      if (contenedorImagenScroll.scrollLeft === contenedorImagenScroll.scrollWidth - contenedorPrincipalScroll.clientWidth) {
        scrollVerticalEnabled = true;
      }

      // Realizar el scroll horizontal mientras el scroll vertical está deshabilitado
      contenedorImagenScroll.scrollLeft += event.deltaY;
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

    var barraAvance = document.getElementById("barra-avanceScroll");

    contenedorImagenScroll.addEventListener("scroll", function() {
      var scrollWidth = contenedorImagenScroll.scrollWidth - contenedorPrincipalScroll.clientWidth;
      var scrollPosition = contenedorImagenScroll.scrollLeft;
      var progress = (scrollPosition / scrollWidth) * 80;

      barraAvance.style.width = progress + "%";
      if (progress >= 80) {scrollVerticalEnabled = true} else {scrollVerticalEnabled = false}
      if (progress >= 100) {
        barraAvance.style.background = "orange";
      } else {
        barraAvance.style.background = "linear-gradient(to right, #FA6400, #FFAB76)";
      }

      var circulos = document.getElementsByClassName("circulo");
      var numCirculos = circulos.length;
      var colorIndex = Math.floor((scrollPosition / scrollWidth) * numCirculos);

      for (var i = 0; i < numCirculos; i++) {
        if (i <= colorIndex) {
          circulos[i].style.backgroundColor = "#FA6400"; // Cambia el color de los círculos a medida que se avanza en el scroll
          circulos[i].style.border = "4px solid #f5c3a2"; // Agrega un borde sólido de 8 px al círculo activo
        } else {
          circulos[i].style.backgroundColor = "#9B9B9B"; // Restablece el color de los círculos anteriores
          circulos[i].style.border = "4px solid #F2F2F2"; // Agrega un borde sólido de 8 px al círculo activo

        }
      }
    });
    // fin scroll horizontal


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

setInterval(nextslideOficinas, 3600);


// fin carousel de Oficinas


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

}
});



