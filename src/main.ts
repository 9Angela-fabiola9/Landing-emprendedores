import { Emprendedor, Visitante } from "./modelos.js";

// MENU
const boton = document.getElementById('menuBtn') as HTMLButtonElement;
const links = document.querySelector('.nav__links') as HTMLElement;

boton.addEventListener('click', () => {
    // Muestra u oculta el menu en pantallas pequeñas
    links.classList.toggle('is-open');
});

console.log('Landing de emprendedores lista para la entrega 1');



// FAQ PREGUNTAS Y RESPUESTAS
const preguntas = document.querySelectorAll('.faq-btn');

preguntas.forEach((pregunta) => {
    pregunta.addEventListener('click', () => {
        const respuesta = pregunta.nextElementSibling as HTMLElement;

        respuesta.classList.toggle('mostrar');
    });
});


// CARRUSEL DE TESTIMONIOS
const tarjetas = document.querySelectorAll('.testimonios .card');
const botonAnterior = document.getElementById('anterior') as HTMLButtonElement;
const botonSiguiente = document.getElementById('siguiente') as HTMLButtonElement;

let posicion: number = 0;

function mostrarReseña(): void {
    tarjetas.forEach((tarjeta, indice) => {
        if (indice === posicion) {
            (tarjeta as HTMLElement).style.display = 'block';
        } else {
            (tarjeta as HTMLElement).style.display = 'none';
        }
    });
}

botonSiguiente.addEventListener('click', (evento: Event) => {
    evento.preventDefault();

    posicion++;

    if (posicion >= tarjetas.length) {
        posicion = 0;
    }
    mostrarReseña();
});

botonAnterior.addEventListener('click', (evento: Event) => {
    evento.preventDefault();

    posicion--;

    if (posicion < 0) {
        posicion = tarjetas.length - 1;
    }
    mostrarReseña();
});

mostrarReseña();

// POO
const emprendedor = new Emprendedor("Mariela", "Mi tienda");
const visitante = new Visitante("Daniela");

console.log(emprendedor.presentar());
console.log(visitante.presentar());