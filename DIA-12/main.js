/* /* /* EJERCICIOS STRINGS */

// 1. Concatena dos cadenas de texto
/* let nombre = "Carlo";
let saludo = "Hola, ";
let mensaje = saludo + nombre;
console.log("1:", mensaje); */

/* let frase = "JavaScript es genial";
console.log("2:", frase.length);  */

// 3. Muestra el primer y último carácter de un string
/* let texto = "Aprender";
console.log("3: Primer:", texto[0], "Último:", texto[texto.length - 1]) */
// 4. Convierte a mayúsculas y minúsculas un string 

/* let lenguaje = "JavaScript";
console.log("4: MAYÚSCULAS:", lenguaje.toUpperCase());
console.log("4: minúsculas:", lenguaje.toLowerCase());  */

// 5. Crea una cadena de texto en varias líneas
/* let multilinea = `Esto es una línea
y esta es otra línea.`;
console.log("5:", multilinea); */

// 8. Comprueba si una cadena de texto contiene una palabra concreta
/* let parrafo = "El cielo es azul y despejado.";
console.log("8:", parrafo.includes("azul"));  */

// 9. Comprueba si dos strings son iguales
/* let a = "hola";
let b = "hola";
console.log("9:", a === b); */

/* // 10. Comprueba si dos strings tienen la misma longitud
let str1 = "gato";
let str2 = "perro";
console.log("10:", str1.length === str2.length); */













/* EJERCICIOS CONDICIONALES */

// 1. Imprime por consola tu nombre si una variable toma su valor
let nombre = "carlo";
if (nombre ==="carlo") {
    console.log("Hola", nombre);
}
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let usuarioCorrecto = "admin";
let contrasenaCorrecta = "1234";
let usuarioIngresado = "admin";
let contrasenaIngresada = "1234";

if (usuarioIngresado === usuarioCorrecto && contrasenaIngresada === contrasenaCorrecta) {
  console.log("Acceso concedido ✅");
} else {
  console.log("Acceso denegado ❌");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = -7;

if (numero > 0) {
  console.log("El número es positivo");
} else if (numero < 0) {
  console.log("El número es negativo");
} else {
  console.log("El número es cero");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 16;

if (edad >= 18) {
  console.log("Puedes votar 🗳️");
} else {
  let faltan = 18 - edad;
  console.log(`No puedes votar. Te faltan ${faltan} años.`);
}

// 5. Usa el operador ternario para asignar "adulto" o "menor"
let categoria = (edad >= 18) ? "adulto" : "menor";
console.log("5:", categoria); // "menor"

// 6. Muestra en qué estación del año nos encontramos según el mes
let mes = "julio"; // puedes cambiar a cualquier mes
let estacion;

switch (mes.toLowerCase()) {
  case "diciembre":
  case "enero":
  case "febrero":
    estacion = "verano";
    break;
  case "marzo":
  case "abril":
  case "mayo":
    estacion = "otoño";
    break;
  case "junio":
  case "julio":
  case "agosto":
    estacion = "invierno";
    break;
  case "setiembre":
  case "septiembre":
  case "octubre":
  case "noviembre":
    estacion = "primavera";
    break;
  default:
    estacion = "Mes inválido";
}

console.log("6: Estación del año:", estacion);

// 7. Muestra cuántos días tiene el mes
let dias;

switch (mes.toLowerCase()) {
  case "enero":
  case "marzo":
  case "mayo":
  case "julio":
  case "agosto":
  case "octubre":
  case "diciembre":
    dias = 31;
    break;
  case "abril":
  case "junio":
  case "setiembre":
  case "septiembre":
  case "noviembre":
    dias = 30;
    break;
  case "febrero":
    dias = 28; // o 29 si es bisiesto
    break;
  default:
    dias = "Mes inválido";
}

console.log("7: Días del mes:", dias);

// 8. Usa un switch para imprimir un saludo en diferentes idiomas
let idioma = "fr"; // opciones: "es", "en", "fr", "pt"
let saludo;

switch (idioma) {
  case "es":
    saludo = "¡Hola!";
    break;
  case "en":
    saludo = "Hello!";
    break;
  case "fr":
    saludo = "Bonjour!";
    break;
  case "pt":
    saludo = "Olá!";
    break;
  default:
    saludo = "Idioma no soportado";
}

console.log("8: Saludo:", saludo);
