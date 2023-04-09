// 1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
// Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.


let btnComenzarJuego = document.querySelector('#btnComenzarJuego');
let formulario = document.querySelector('form');
let numRandom = 0;

console.log(formulario);
btnComenzarJuego.addEventListener('click', generarNumeroRandom);
formulario.addEventListener('submit', compararNumero);

function generarNumeroRandom () {
console.log('funciona boton generar Numero');
numRandom = Math.floor(Math.random()*(100-1+1)+1);
console.log(numRandom);
}

function compararNumero () {
    console.log('funciona submit')

}