/* generar los x terminos de la serie de los numeros multiplos de 5 */
/* let numeroX = parseInt(prompt("Ingrese el número x favor:"));
let resultado = "";
for (let i = 1; i <= numeroX; i++) {
  resultado += (i * 5) + " ";
}                */

/* quiero que realicen una calculadora de exponentes sin utilizar ** 
piden 2 numeros al usuario 1ro sera el que deberan multiplicar 
reiteradas veces y el 2do se la cantidad de veces que sera iterado */
/* let base = parseFloat(prompt("Ingrese la base:"));
let exponente = parseInt(prompt("Ingrese el exponente:"));
let resultadoExponente = 1;
for (let i = 0; i < exponente; i++) {
  resultadoExponente *= base;
} 
alert("El resultado de " + base + " elevado a " + exponente + " es: " + resultadoExponente); */






function eliminaEspacios(cadena) {
  let resultado = "";
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] !== " ") {
      resultado = resultado + cadena[i];
    }
  }
  return resultado;
}

console.log(eliminaEspacios("Ca r l o   Br a v o"));


/* Aghora quiero invertir el orden de cadena funcion para invertir los elementos de un string*/

function invierte(cadena) {
  let resultado = "";
  for (let i = cadena.length - 1; i >= 0; i--) {
    resultado += cadena[i];
  }
  return resultado;
}