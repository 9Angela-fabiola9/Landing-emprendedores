const boton = document.getElementById('menuBtn');
const links = document.querySelector('.nav__links');

boton.addEventListener('click', () => {
    //Muestra u oculta el menu en pantallas pequeñas 
    links.classList.toggle('is-open');
});

console.log('Landing de emprendedores lista para la entrega 1'); 