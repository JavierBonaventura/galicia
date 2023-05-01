
window.addEventListener("DOMContentLoaded", (event) => {
    const el = document.getElementById('test');
  
    const slider = document.querySelector('.galleryy');
let isDown = false;
let startX;
let scrollLeft;

if (slider) {



// cambio de imagenes de colores

const contenidoOculto0 = document.querySelector('#contenido-oculto0');
const contenedorImagen1 = document.querySelector('.Imagen1');
const contenidoOculto1 = document.querySelector('#contenido-oculto1');

contenedorImagen1.addEventListener('click', () => {
    contenidoOculto1.style.display = 'flex';
    contenidoOculto2.style.display = 'none';
    contenidoOculto3.style.display = 'none';
    contenidoOculto4.style.display = 'none';
    contenidoOculto5.style.display = 'none';
    contenidoOculto0.style.display = 'none';
    contenidoOculto1.style.animation = "fade-in 1s";

});

const contenedorImagen2 = document.querySelector('.Imagen2');
const contenidoOculto2 = document.querySelector('#contenido-oculto2');

contenedorImagen2.addEventListener('click', () => {
    contenidoOculto1.style.display = 'none';
    contenidoOculto2.style.display = 'flex';
    contenidoOculto3.style.display = 'none';
    contenidoOculto4.style.display = 'none';
    contenidoOculto5.style.display = 'none';
    contenidoOculto0.style.display = 'none';

    contenidoOculto2.style.animation = "fade-in 1s";

});

const contenedorImagen3 = document.querySelector('.Imagen3');
const contenidoOculto3 = document.querySelector('#contenido-oculto3');

contenedorImagen3.addEventListener('click', () => {
    contenidoOculto1.style.display = 'none';
    contenidoOculto2.style.display = 'none';
    contenidoOculto3.style.display = 'flex';
    contenidoOculto4.style.display = 'none';
    contenidoOculto5.style.display = 'none';
    contenidoOculto0.style.display = 'none';

    contenidoOculto3.style.animation = "fade-in 1s";

});

const contenedorImagen4 = document.querySelector('.Imagen4');
const contenidoOculto4 = document.querySelector('#contenido-oculto4');

contenedorImagen4.addEventListener('click', () => {
    contenidoOculto1.style.display = 'none';
    contenidoOculto2.style.display = 'none';
    contenidoOculto3.style.display = 'none';
    contenidoOculto4.style.display = 'flex';
    contenidoOculto5.style.display = 'none';
    contenidoOculto0.style.display = 'none';

    contenidoOculto4.style.animation = "fade-in 1s";

});

const contenedorImagen5 = document.querySelector('.Imagen5');
const contenidoOculto5 = document.querySelector('#contenido-oculto5');

contenedorImagen5.addEventListener('click', () => {
    contenidoOculto1.style.display = 'none';
    contenidoOculto2.style.display = 'none';
    contenidoOculto3.style.display = 'none';
    contenidoOculto4.style.display = 'none';
    contenidoOculto5.style.display = 'flex';
    contenidoOculto0.style.display = 'none';

    contenidoOculto5.style.animation = "fade-in 1s";

});



    // fin cambio de imagenes de colores //




	const slides = document.querySelectorAll(".item");
		let current = 0;
		let prev = 3;
		let next = 2;
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
    console.log(contador);
    gotoNum(contador)
    contador++;
    }

    setInterval(contar, 2000); 






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

function nextSlideHeader() {
  showSlideHeader(currentSlideHeader + 1);
}

setInterval(nextSlideHeader, 3600);


// fin carousel del header

  












  
 


 

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



