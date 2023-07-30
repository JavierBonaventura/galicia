
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
indicatorsMobile.forEach((indicatorMobile, indexMobile) => {
indicatorMobile.addEventListener('click', () => {
  showSlideHeaderMobile(indexMobile);
});
});

function nextSlideHeaderMobile() {
showSlideHeaderMobile(currentSlideHeaderMobile + 1);
}

setInterval(nextSlideHeaderMobile, 3600);


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


  // inicio indicadores circulares
const sliderindicatorCircularWrapperMobile = document.querySelector('.sliderindicatorCircularMobile-wrapper');
const indicatorCircularsMobile = document.querySelectorAll('.indicatorCircularMobile');

let slideIndexMobile = 0;

function showSlideMobile(n) {
  const slidePositionMobile = -(n * 25);
  sliderindicatorCircularWrapperMobile.style.left = slidePositionMobile + '%';
  indicatorCircularsMobile.forEach((indicatorCircular, indexMobile) => {
    if (indexMobile === n) {
      indicatorCircular.classList.add('active');
    } else {
      indicatorCircular.classList.remove('active');
    }
  });
}


function nextSlideMobile() {
  slideIndexMobile++;
  if (slideIndexMobile >= 4) {
    slideIndexMobile = 0;
  }
  showSlideMobile(slideIndexMobile);
}

setInterval(nextSlideMobile, 2000);

indicatorCircularsMobile.forEach((indicatorCircular, indexMobile) => {
  indicatorCircular.addEventListener('click', () => {
    slideIndexMobile = indexMobile;
    showSlideMobile(slideIndexMobile);
  });
});

showSlideMobile(slideIndexMobile);

// fin indicadores circulares



    // inicio scroll horizontal
    var contenedorPrincipalScrollMobile = document.getElementById("scrollHorizontalMobile");
    var contenedorImagenScrollMobile = document.getElementById("scrollHorizontal-imagenMobile");
    var btnIzquierdaMobile = document.getElementById("btn-izquierdaMobile");
    var btnDerechaMobile = document.getElementById("btn-derechaMobile");

// agregado
var scrollVerticalEnabledMobile = false;
 // Evento de rueda para detectar el scroll vertical en el contenedor principal
 contenedorPrincipalScrollMobile.addEventListener("wheel", function(event) {
    event.preventDefault();

    // Si el scroll vertical está habilitado, realizar el scroll vertical del sitio
    if (scrollVerticalEnabledMobile) {
      window.scrollBy({
        top: event.deltaY,
        behavior: "smooth"
      });
    } else {
      // Si el scroll horizontal llegó al final, habilitar el scroll vertical
      if (contenedorImagenScrollMobile.scrollLeft === contenedorImagenScrollMobile.scrollWidth - contenedorPrincipalScrollMobile.clientWidth) {
        scrollVerticalEnabledMobile = true;
      }

      // Realizar el scroll horizontal mientras el scroll vertical está deshabilitado
      contenedorImagenScrollMobile.scrollLeft += event.deltaY;
    }
  });
// agegado
    btnIzquierdaMobile.addEventListener("click", function() {
      contenedorImagenScrollMobile.scrollBy({
        left: -250,
        behavior: "smooth"
      });
    });

    btnDerechaMobile.addEventListener("click", function() {
      contenedorImagenScrollMobile.scrollBy({
        left: 250,
        behavior: "smooth"
      });
    });

    contenedorImagenScrollMobile.addEventListener("wheel", function(event) {
      event.preventDefault();
      contenedorImagenScrollMobile.scrollLeft += event.deltaY;
    });

    var barraAvanceMobile = document.getElementById("barra-avanceScrollMobile");

    contenedorImagenScrollMobile.addEventListener("scroll", function() {
      var scrollWidthMobile = contenedorImagenScrollMobile.scrollWidth - contenedorPrincipalScrollMobile.clientWidth;
      var scrollPositionMobile = contenedorImagenScrollMobile.scrollLeft;
      var progressMobile = (scrollPositionMobile / scrollWidthMobile) * 80;

      barraAvanceMobile.style.width = progressMobile + "%";
      if (progressMobile >= 80) {scrollVerticalEnabledMobile = true} else {scrollVerticalEnabledMobile = false}
      if (progressMobile >= 100) {
        barraAvanceMobile.style.background = "orange";
      } else {
        barraAvanceMobile.style.background = "linear-gradient(to right, #FA6400, #FFAB76)";
      }


    });
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

setInterval(nextslideOficinasMobile, 3600);


// fin carousel de Oficinas


// inicio personas talento 

const imagenes1Mobile = document.querySelector('.imagenGeneral1Mobile');
const imagenes2Mobile = document.querySelector('.imagenGeneral2Mobile');
const imagenes3Mobile = document.querySelector('.imagenGeneral3Mobile');
const imagenes4Mobile = document.querySelector('.imagenGeneral4Mobile');
const imagenes5Mobile = document.querySelector('.imagenGeneral5Mobile');


  const imagenGrandeURL1Mobile = 'images/persona1_oscuro_grande.jpg';
  const imagenGrandeURL2Mobile = 'images/persona2_oscuro_grande.jpg';
  const imagenGrandeURL3Mobile = 'images/persona3_oscuro_grande.jpg';
  const imagenGrandeURL4Mobile = 'images/persona4_oscuro_grande.jpg';
  const imagenGrandeURL5Mobile = 'images/persona5_oscuro_grande.jpg';

  const imagenChicaURL1Mobile = 'images/persona1_oscuro_chica.jpg';
  const imagenChicaURL2Mobile = 'images/persona2_oscuro_chica.jpg';
  const imagenChicaURL3Mobile = 'images/persona3_oscuro_chica.jpg';
  const imagenChicaURL4Mobile = 'images/persona4_oscuro_chica.jpg';
  const imagenChicaURL5Mobile = 'images/persona5_oscuro_chica.jpg';
  
  imagenes1Mobile.addEventListener('mouseenter', () => {
  imagenes1Mobile.src = imagenGrandeURL1Mobile;
  // imagenes1Mobile.style.width = '338px';
});

imagenes1Mobile.addEventListener('mouseleave', () => {
  console.log("dasdas")
  imagenes1Mobile.src = imagenChicaURL1Mobile;
  // imagenes1Mobile.style.width = '200px';
});

imagenes2Mobile.addEventListener('mouseenter', () => {
  imagenes2Mobile.src = imagenGrandeURL2Mobile;
  // imagenes2Mobile.style.width = '338px';
});

imagenes2Mobile.addEventListener('mouseleave', () => {
  imagenes2Mobile.src = imagenChicaURL2Mobile;
  // imagenes2Mobile.style.width = '200px';
});

imagenes3Mobile.addEventListener('mouseenter', () => {
  imagenes3Mobile.src = imagenGrandeURL3Mobile;
  // imagenes3Mobile.style.width = '338px';
});

imagenes3Mobile.addEventListener('mouseleave', () => {
  imagenes3Mobile.src = imagenChicaURL3Mobile;
  // imagenes3Mobile.style.width = '200px';
});

imagenes4Mobile.addEventListener('mouseenter', () => {
  imagenes4Mobile.src = imagenGrandeURL4Mobile;
  // imagenes4Mobile.style.width = '338px';
});

imagenes4Mobile.addEventListener('mouseleave', () => {
  imagenes4Mobile.src = imagenChicaURL4Mobile;
  // imagenes4Mobile.style.width = '200px';
});

imagenes5Mobile.addEventListener('mouseenter', () => {
  imagenes5Mobile.src = imagenGrandeURL5Mobile
  // imagenes5Mobile.style.width = '338px';
});

imagenes5Mobile.addEventListener('mouseleave', () => {
  imagenes5Mobile.src = imagenChicaURL5Mobile;
  // imagenes5Mobile.style.width = '200px';
});

// fin personas talento 

}
});



