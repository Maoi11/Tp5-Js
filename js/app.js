// 1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
// Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.

let btnComenzarJuego = document.querySelector("#btnComenzarJuego");
let formulario = document.querySelector("form");
let numRandom = 0;

console.log(formulario);
btnComenzarJuego.addEventListener("click", generarNumeroRandom);
formulario.addEventListener("submit", compararNumero);

function generarNumeroRandom() {
  //console.log('funciona boton generar Numero');
  numRandom = Math.floor(Math.random() * (100 - 1 + 1) + 1);
  console.log(numRandom);
  alert(
    "Se ha generado el número aleatorio. Intentá adivinarlo escribiendo tu suposición en el formulario."
  );
}

function compararNumero(e) {
  e.preventDefault();
  console.log(e);
  console.log("Prueba funcion compararNumero en formulario");
  let numUsuario = (document.querySelector("input")).value;
  console.log(numUsuario);
  if (!isNaN(numUsuario) && numUsuario <= 100 && numUsuario >= 1) {
    if (numUsuario == numRandom) {
      alert(`¡Felicidades! El número secreto era ${numRandom}`);
    } else if (numUsuario < numRandom) {
      alert("El número buscado es mayor al que ingresaste");
    } else if (numUsuario > numRandom) {
      alert("El número ingresado es menor al que ingresaste");
    }
  } else {
    alert(
      "Usted no ingresó un número válido. Ingrese un número entre 1 y 100 y presione el botón verde para enviar el número que eligió."
    );
  }
}
