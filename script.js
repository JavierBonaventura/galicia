
window.addEventListener("DOMContentLoaded", (event) => {
    const el = document.getElementById('test');
  
    const slider = document.querySelector('.nav-bar');
let isDown = false;
let startX;
let scrollLeft;

if (slider) {



// cambio de imagenes de colores

// const contenidoOculto0 = document.querySelector('#contenido-oculto0');
// const contenedorImagen1 = document.querySelector('.Imagen1');
// const contenidoOculto1 = document.querySelector('#contenido-oculto1');

// contenedorImagen1.addEventListener('click', () => {
//     contenidoOculto1.style.display = 'flex';
//     contenidoOculto2.style.display = 'none';
//     contenidoOculto3.style.display = 'none';
//     contenidoOculto4.style.display = 'none';
//     contenidoOculto5.style.display = 'none';
//     contenidoOculto0.style.display = 'none';
//     contenidoOculto1.style.animation = "fade-in 1s";

// });

// const contenedorImagen2 = document.querySelector('.Imagen2');
// const contenidoOculto2 = document.querySelector('#contenido-oculto2');

// contenedorImagen2.addEventListener('click', () => {
//     contenidoOculto1.style.display = 'none';
//     contenidoOculto2.style.display = 'flex';
//     contenidoOculto3.style.display = 'none';
//     contenidoOculto4.style.display = 'none';
//     contenidoOculto5.style.display = 'none';
//     contenidoOculto0.style.display = 'none';

//     contenidoOculto2.style.animation = "fade-in 1s";

// });

// const contenedorImagen3 = document.querySelector('.Imagen3');
// const contenidoOculto3 = document.querySelector('#contenido-oculto3');

// contenedorImagen3.addEventListener('click', () => {
//     contenidoOculto1.style.display = 'none';
//     contenidoOculto2.style.display = 'none';
//     contenidoOculto3.style.display = 'flex';
//     contenidoOculto4.style.display = 'none';
//     contenidoOculto5.style.display = 'none';
//     contenidoOculto0.style.display = 'none';

//     contenidoOculto3.style.animation = "fade-in 1s";

// });

// const contenedorImagen4 = document.querySelector('.Imagen4');
// const contenidoOculto4 = document.querySelector('#contenido-oculto4');

// contenedorImagen4.addEventListener('click', () => {
//     contenidoOculto1.style.display = 'none';
//     contenidoOculto2.style.display = 'none';
//     contenidoOculto3.style.display = 'none';
//     contenidoOculto4.style.display = 'flex';
//     contenidoOculto5.style.display = 'none';
//     contenidoOculto0.style.display = 'none';

//     contenidoOculto4.style.animation = "fade-in 1s";

// });

// const contenedorImagen5 = document.querySelector('.Imagen5');
// const contenidoOculto5 = document.querySelector('#contenido-oculto5');

// contenedorImagen5.addEventListener('click', () => {
//     contenidoOculto1.style.display = 'none';
//     contenidoOculto2.style.display = 'none';
//     contenidoOculto3.style.display = 'none';
//     contenidoOculto4.style.display = 'none';
//     contenidoOculto5.style.display = 'flex';
//     contenidoOculto0.style.display = 'none';

//     contenidoOculto5.style.animation = "fade-in 1s";

// });



    // fin cambio de imagenes de colores //

// inicio personas talento 

const imagesPersonas = document.querySelectorAll('.imagePersonas');
const textHoverElements = document.querySelectorAll('.text-hover');

imagesPersonas.forEach((imagePersonas, index) => {
  imagePersonas.addEventListener('mouseover', () => {
    imagesPersonas.forEach((otherImage, otherIndex) => {
      if (otherIndex < index) {
        otherImage.style.transform = 'translateX(-30%) scale(1)';
        textHoverElements[otherIndex].style.transform = 'translateX(-40%)';
      } else if (otherIndex > index) {
        otherImage.style.transform = 'translateX(30%) scale(1)';
        textHoverElements[otherIndex].style.transform = 'translateX(40%)';
      } else if (otherIndex === index) {
        otherImage.style.transform = 'scale(1.3)';
        textHoverElements[otherIndex].style.transform = 'scale(1.0)';
      }
    });
  });

  imagePersonas.addEventListener('mouseout', () => {
    imagesPersonas.forEach((otherImage) => {
      otherImage.style.transform = 'scale(1)';
    });
    textHoverElements.forEach((textElement) => {
      textElement.style.transform = 'translateX(0)';
    });
  });
});

textHoverElements.forEach((textElement, index) => {
  textElement.addEventListener('mouseover', () => {
    imagesPersonas.forEach((otherImage, otherIndex) => {
      if (otherIndex < index) {
        otherImage.style.transform = 'translateX(-30%) scale(1)';
        textHoverElements[otherIndex].style.transform = 'translateX(-40%)';
      } else if (otherIndex > index) {
        otherImage.style.transform = 'translateX(30%) scale(1)';
        textHoverElements[otherIndex].style.transform = 'translateX(40%)';
      } else if (otherIndex === index) {
        otherImage.style.transform = 'scale(1.3)';
        textHoverElements[otherIndex].style.transform = 'scale(1.0)';
      }
    });
  });

  textElement.addEventListener('mouseout', () => {
    imagesPersonas.forEach((otherImage) => {
      otherImage.style.transform = 'scale(1)';
    });
    textHoverElements.forEach((textElement) => {
      textElement.style.transform = 'translateX(0)';
    });
  });

  textElement.style.transition = 'transform 0.3s'; // Agregamos la transición suave al texto
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
    // fin de animacion de iconos

// inicio zoom personas //
// const imagenPerson1 = document.querySelector('.imagenPerson1');
// const imagenGrande1 = document.querySelector('.imagenGrande1');
// const imagenPerson2 = document.querySelector('.imagenPerson2');
// const imagenGrande2 = document.querySelector('.imagenGrande2');
// const imagenPerson3 = document.querySelector('.imagenPerson3');
// const imagenGrande3 = document.querySelector('.imagenGrande3');
// const imagenPerson4 = document.querySelector('.imagenPerson4');
// const imagenGrande4 = document.querySelector('.imagenGrande4');
// const imagenPerson5 = document.querySelector('.imagenPerson5');
// const imagenGrande5 = document.querySelector('.imagenGrande5');




// imagenGrande1.addEventListener('mouseover', () => {
//   imagenPerson2.style.transform = 'translateX(100px)';
//   imagenPerson3.style.transform = 'translateX(100px)';

// });

// imagenGrande1.addEventListener('mouseout', () => {
//   imagenPerson2.style.transform = 'translateX(0)';
//   imagenPerson3.style.transform = 'translateX(0)';

// });

// imagenGrande2.addEventListener('mouseover', () => {
//   imagenPerson1.style.transform = 'translateX(-100px)';
//   imagenPerson3.style.transform = 'translateX(100px)';

// });

// imagenGrande2.addEventListener('mouseout', () => {
//   imagenPerson1.style.transform = 'translateX(0)';
//   imagenPerson3.style.transform = 'translateX(0)';
// });

// imagenGrande3.addEventListener('mouseover', () => {
//   imagenPerson1.style.transform = 'translateX(-100px)';
//   imagenPerson2.style.transform = 'translateX(-100px)';
// });

// imagenGrande3.addEventListener('mouseout', () => {
//   imagenPerson1.style.transform = 'translateX(0)';
//   imagenPerson2.style.transform = 'translateX(0)';
// });

// imagenGrande4.addEventListener('mouseover', () => {
//   imagenPerson1.style.transform = 'translateX(-100px)';
//   imagenPerson3.style.transform = 'translateX(100px)';

// });

// imagenGrande4.addEventListener('mouseout', () => {
//   imagenPerson1.style.transform = 'translateX(0)';
//   imagenPerson3.style.transform = 'translateX(0)';
// });

// imagenGrande5.addEventListener('mouseover', () => {
//   imagenPerson1.style.transform = 'translateX(-100px)';
//   imagenPerson2.style.transform = 'translateX(-100px)';
// });

// imagenGrande5.addEventListener('mouseout', () => {
//   imagenPerson1.style.transform = 'translateX(0)';
//   imagenPerson2.style.transform = 'translateX(0)';
// });


// fin zoom personas //



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

setInterval(nextSlideHeader, 3600);


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

setInterval(nextslideOficinas, 3600);


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
        circulos[i].style.backgroundColor = "#FA6400";
        circulos[i].style.border = "4px solid #f5c3a2"; 
      } else {
        circulos[i].style.backgroundColor = "#9B9B9B";
        circulos[i].style.border = "4px solid #F2F2F2"; 

      }
    }
  });
  // fin scroll horizontal

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

}
});



