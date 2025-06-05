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
/* let ArrayFrutas = ["Papaya", "Platano", "Naranja", "Pitahaya"];
console.log(ArrayFrutas); */

/* eliminar el primer elemento del array */
/* ArrayFrutas.shift();
console.log(ArrayFrutas); */

/* agregar un elemento al final del array */
/* ArrayFrutas.push("mango");
console.log(ArrayFrutas);   */ 

/* contar cuantos elementos hay en un array */
/* console.log(ArrayFrutas.length); */

/* sumar todos los numeros de un array */
/* let notas = [100, 89, 20, 45, 51];
let suma = 0;
for (let j = 0; j < notas.length; j++) {
    suma += notas[j];
}
console.log(suma) */

/* contar cuantos elementos son mayores a 10 */

/* let notas1 = [3, 7, 44, 6, 100, 89, 20, 45, 51, 21 ,12 ,4 ,-1 ,32 ,2 ,11 ,10];
let contador = 0;
for (let i = 0; i < notas1.length; i++) {
    if (notas1[i] > 10) {
        contador++;
    }
}
console.log(contador); */

/* convertir todos los elementos de un array a mayusculas */
/* let nombres = ["carlo", "anthony", "bruno", "google"];
let nombresMayusculas = [];
for (let i = 0; i < nombres.length; i++) {
    nombresMayusculas.push(nombres[i].toUpperCase());
}
console.log(nombresMayusculas); */

/* crear un nuevo array con el doble de numero */
/* let dobleNotas1 = [];
for (let i = 0; i < notas1.length; i++) {
    dobleNotas1.push(notas1[i] * 2);
}
console.log(dobleNotas1);

function nombreFuncion(){} */

/* iterar usando forEach y sacar el promedio de los estiudiantes de funval */
/* let notasFunval= [100, 90,10, 15, 67, 70, 0, 88]; 
let sumaNotas = 0;
notasFunval.forEach(function(nota) {
    sumaNotas += nota;
}); 
console.log(sumaNotas);
let promedio = sumaNotas / notasFunval.length;
console.log(promedio); */

/* ver que hace includes , map, slice, find y filter */

/* objetos */
/* let persona={
    nombre:"Carlo",
    edad: 28,
    genero: "masculino",
    altura:1.86
};
console.log(persona.altura);
persona.edad=30
console.log(persona.edad);
persona.celular="+51958318829"
console.log(persona);

delete persona.altura;
console.log(persona);

 */

/* let estudianteFunval= {
    nombre: "Marco",
    edad: 22,
    genero: "masculino",
    notas: [100, 90, 0, 51, 85],
} */

/* mostrar el nombre del estudiante y su promedio de notas */

/* console.log(estudianteFunval.nombre);
let promedio1= 0;
for (let i = 0; i < estudianteFunval.notas.length; i++) {
    promedio1 += estudianteFunval.notas[i];
}
promedio1 /= estudianteFunval.notas.length;
console.log(promedio1);    */

/* tenemos un array de estudiantes con diferentes notas, 
quiero que me muestre un listado de los estudiantes aprobados, 
se considerara aprobado aquel que tenga un promedio mayor a 51 */

let estudiantes = [
    {
    nombre: "Marco",
    edad: 22,
    pais: "Peru", //estudiantes[0]
    notas: [100, 90, 0, 51, 85],
  },
  {
    nombre: "Pablo",
    edad: 33,
    pais: "Argentina", //estudiantes[1]
    notas: [90, 75, 0, 0, 10],
  },
  {
    nombre: "Thomas",
    edad: 21, //estudiantes[2]
    pais: "Argentina",
    notas: [51, 30, 20, 41, 85],
  },
  {
    nombre: "Woodleine",
    edad: 33, //estudiantes[2]
    pais: "Chile",
    notas: [88, 11, 33, 77, 99],
  },
  {
    nombre: "Kevin",
    edad: 28, //estudiantes[2]
    pais: "Bolivia",
    notas: [31, 30, 12, 51, 77],
  },
];
/* function calcularPromedio(notas) {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        promedio = promedio + notas[i];
    }
    return promedio / notas.length;
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
} */

/*     del array de estudiantes mostrar los estudiantes que pertenecen a Argentina usando Filter */

const result = estudiantes.filter((argentinos) => argentinos.pais === "Argentina")
console.log(result);



