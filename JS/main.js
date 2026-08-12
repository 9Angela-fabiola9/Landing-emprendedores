//MENU
const boton = document.getElementById('menuBtn');
const links = document.querySelector('.nav__links');

boton.addEventListener('click', () => {
    //Muestra u oculta el menu en pantallas pequeñas 
    links.classList.toggle('is-open');
});

console.log('Landing de emprendedores lista para la entrega 1'); 

//FAQ PREGUNTAS Y RESPUESTAS 
const preguntas = document.querySelectorAll('.faq-btn');

preguntas.forEach(function(pregunta) {
    pregunta.addEventListener('click', function() {
        const respuesta = pregunta.nextElementSibling;

        respuesta.classList.toggle('mostrar');
    });
});

//TESTIMONIOS

// CARRUSEL DE TESTIMONIOS
const tarjetas = document.querySelectorAll('.testimonios .card');
const botonAnterior = document.getElementById('anterior');
const botonSiguiente = document.getElementById('siguiente');

let posicion = 0;

function mostrarReseña() {
    tarjetas.forEach(function(tarjeta, indice) {
        
        if (indice === posicion) {
            tarjeta.style.display = 'block';
        } else {
            tarjeta.style.display = 'none';
        }
    });
}

botonSiguiente.addEventListener('click', function(evento) {
    evento.preventDefault();
    posicion++;
    
    if (posicion >= tarjetas.length) {
        posicion = 0;
    }
    
    mostrarReseña();
});

botonAnterior.addEventListener('click', function(evento) {
    evento.preventDefault();
    
    posicion--;
    if (posicion < 0) {
        posicion = tarjetas.length - 1;
    }
    
    mostrarReseña();
});

mostrarReseña();
