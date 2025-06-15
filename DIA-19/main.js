/* arrays desestructuracion y propgacion ejercicios */
let a = [1, 2, 3];
let b = ["a","b","c"];

/* SALIDA ESPERADA:[1,a,2,b,3,c] */

let salida = [...a, ...b];
console.log(salida);



/* objetos */
/* let profesional = {
    carrera: "medico",
    especialidad: "pediatra",
} */

/* agregar las llaves de turno y lista de paceientes 
que sera un array a ese objeto convirtiendolo en un superProfesional */

