/* let miArray = ["Carlo",322,true,32.7];
console.log(miArray[0]);

console.log(miArray.length);

miArray.push("Anthony");
console.log(miArray);

miArray.unshift("Bruno","google");
console.log(miArray);

miArray.pop()   
console.log(miArray);

miArray.shift();
console.log(miArray);
 */
/* regla de oro
Siempre que se vea un array hay qie iterarlo
*/
/* for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
*/
/* Mostrar el primer y ultimo elemento de un array */
/* let miArray = ["Carlo", 322, true, 32.7, "Anthony", "Bruno", "google"];
console.log(miArray[0]); */


/* crear un array de frutas y mostrarlo */
let ArrayFrutas = ["Papaya", "Platano", "Naranja", "Pitahaya"];
console.log(ArrayFrutas);

/* eliminar el primer elemento del array */
ArrayFrutas.shift();
console.log(ArrayFrutas);

/* agregar un elemento al final del array */
ArrayFrutas.push("mango");
console.log(ArrayFrutas);   

/* contar cuantos elementos hay en un array */
console.log(ArrayFrutas.length);

/* sumar todos los numeros de un array */
let notas = [100, 89, 20, 45, 51];
let suma = 0;
for (let j = 0; j < notas.length; j++) {
    suma += notas[j];
}
console.log(suma)

/* contar cuantos elementos son mayores a 10 */

let notas1 = [3, 7, 44, 6, 100, 89, 20, 45, 51, 21 ,12 ,4 ,-1 ,32 ,2 ,11 ,10];
let contador = 0;
for (let i = 0; i < notas1.length; i++) {
    if (notas1[i] > 10) {
        contador++;
    }
}
console.log(contador);

/* convertir todos los elementos de un array a mayusculas */
let nombres = ["carlo", "anthony", "bruno", "google"];
let nombresMayusculas = [];
for (let i = 0; i < nombres.length; i++) {
    nombresMayusculas.push(nombres[i].toUpperCase());
}
console.log(nombresMayusculas);

/* crear un nuevo array con el doble de numero */
let dobleNotas1 = [];
for (let i = 0; i < notas1.length; i++) {
    dobleNotas1.push(notas1[i] * 2);
}
console.log(dobleNotas1);

function nombreFuncion(){}

/* iterar usando forEach y sacar el promedio de los estiudiantes de funval */
let notasFunval= [100, 90,10, 15, 67, 70, 0, 88]; 
let sumaNotas = 0;
notasFunval.forEach(function(nota) {
    sumaNotas += nota;
}); 
console.log(sumaNotas);
let promedio = sumaNotas / notasFunval.length;
console.log(promedio);