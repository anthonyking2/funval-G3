/* # Calculadora de Áreas Geométricas */

let opcion1 = prompt(
  "\n \n INGRESE UNA OPCION DEL 1 AL 3:\n \n 1. Calcular el area de un cuadrado \n 2. Calcular el area de un rectangulo \n 3. Calcular el area de un triangulo \n"
);
let opcion = parseInt(opcion1);

if (isNaN(opcion) || opcion < 1 || opcion > 3) {
  alert("Ingresaste una opcion invalida!!! \n Igresa los datos nuevamente!!!");
} else if (opcion === 1) {
  let ladoCuadrado = parseInt(prompt("Ingrese el lado del cuadrado:"));
  let areaCuadrado = ladoCuadrado * ladoCuadrado;
  alert("El area del cuadrado es:   " + areaCuadrado + "  : )");
} else if (opcion === 2) {
  let baseRectangulo = parseInt(prompt("Ingrese base del rectangulo:"));
  let alturRectangulo = parseInt(prompt("Ingrese altura del rectangulo"));
  let areaRectangulo = baseRectangulo * alturRectangulo;
  alert("El area del rectangulo es:   " + areaRectangulo + "  : )");
} else if (opcion === 3) {
  let baseTriangulo = parseInt(prompt("Ingrese base del triangulo:"));
  let alturaTriangulo = parseInt(prompt("Ingrese altura del triangulo"));
  let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
  alert("El area del triangulo es:   " + areaTriangulo + "  : )");
}
