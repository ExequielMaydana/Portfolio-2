/* Menu-hamburguesa */

document.querySelector(".bars__menu").addEventListener("click", animateBars);

const line1__bars = document.querySelector(".line1__bars-menu");
const line2__bars = document.querySelector(".line2__bars-menu");
const line3__bars = document.querySelector(".line3__bars-menu");
const container__menu = document.querySelector(".menu__items-container");

function animateBars() {
  line1__bars.classList.toggle("activeline1__bars-menu");
  line2__bars.classList.toggle("activeline2__bars-menu");
  line3__bars.classList.toggle("activeline3__bars-menu");

  container__menu.classList.toggle("menu__active");
}

/* efecto maquina de escribir usando la libreria typed.js */

const text__maquina = new Typed(".typed", {
  strings: ['<i class="text-maquina">Frontend Developer</i>'],
  typeSpeed: 80, // Velocidad en milisegundos para poner una letra.
  startDelay: 700, // Tiempo de retraso en iniciar la animacion, Aplica tambien cuando termina y vuelve a iniciar.
  backSpeed: 75, // Velocidad en milisegundos para borrar una letra.
  backDelay: 3000, // Tiempo de espera despues de que termina de escribir una palabra.
  loop: true, //Repetir el array de strings
  contentType: "html", // con esto le indicamos que estamos trabajando con html. Si en vez de html pusuieramos "null", nos mostraria las etiquetas con las que encerramos el texto.
});
