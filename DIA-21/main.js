/*practicar iteraciones */
// implmentar fibonacci

/* n=5
0,1,1,2,3
n=2
0,1
n=7
0,1,1,2,3,4,5,8 */

/* prueba tecnica de fibonacci
let a = 0;
let b = 1;
let c = 0;

let n = parseInt(prompt("ingrese el numero de la serie"))

for (let i = 1; i <= n; i++){
    if(i ===  1){
        console.log(a);
    }
    if(i === 2){
        console.log(b);
    }
    if(i > 2){
        c = a + b;
        console.log(c);
        a = b;
        b = c;
    }
} */

/* deberan devolver la suma de la diagonal principal  5+ 7 + 77
este programa debera funcionar con cualquier matriz cuadrada*/

  /*   let matriz = [
    [5, 3, 12],
    [8, 7, 4],
    [15, 10, 77]
];

let sumaDiagonal = 0;
for (let i = 0; i < matriz.length; i++) {
    sumaDiagonal += matriz[i][i];
}   
console.log("La suma de la diagonal principal es: " + sumaDiagonal);
console.log(matriz.length); */

/* funciones de orden superior */

/* function saludar(nombre) {
    console.log("Hola, " + nombre + "!");
} */

/* function superSaludo(nombre, callback) {
    console.log("Iniciando saludo...");
    callback(nombre);
} */
/* superSaludo("Pepito", saludar); */

/* MAP */

/* let notasDoble = notas.map((nota) => nota * 2);{    
    console.log(notasDoble);
}
/* filter */
/*  let notasAprob= notas.filter((nota) => nota > 51);{
 } */
/*  ejrecicios */

/* const estudiantesFunval = [
    { nombre: "Felipe", nota: 89},
    { nombre: "Thomas", nota: 34},
    { nombre: "Pablo", nota: 77},
    { nombre: "Woodline", nota: 68},
    { nombre: "Mahonri", nota: 23}, */

/* extraer los nombres de los estudiantes aprobados y mostrarles en masyusculas
se consideran aprobados los estudiantes con nota arriba de 76 */

/* FELIPE------ PABLO------ESTA PROHIBIDO USAR FOR */

/* let estudiantesAprobados = estudiantesFunval
    .filter((estudiante) => estudiante.edad > 76)
    .map((estudiante) => estudiante.nombre.toUpperCase());
    console.log(estudiantesAprobados); */


    
const estudiantesFunval2 = [
  { nombre: "Lucía Gómez", pais: "Argentina", edad: 20, notas: [8, 7, 9, 10] },
  { nombre: "Mateo Rojas", pais: "México", edad: 22, notas: [6, 8, 7] },
  {
    nombre: "Valentina Pérez",
    pais: "Chile",
    edad: 21,
    notas: [9, 9, 10, 10, 8],
  },
  { nombre: "Carlos Silva", pais: "Colombia", edad: 23, notas: [7, 6, 7] },
  { nombre: "Sofía Torres", pais: "España", edad: 19, notas: [10, 9, 10] },
  { nombre: "Andrés Castillo", pais: "Perú", edad: 24, notas: [5, 6, 7, 8] },
  { nombre: "Camila Herrera", pais: "Uruguay", edad: 22, notas: [8, 9, 7] },
  { nombre: "Juan López", pais: "Bolivia", edad: 20, notas: [6, 7, 6, 5] },
  {
    nombre: "Isabela Ramírez",
    pais: "Ecuador",
    edad: 21,
    notas: [9, 8, 9, 10],
  },
  { nombre: "Tomás Díaz", pais: "Paraguay", edad: 23, notas: [6, 6, 7, 8] },
  {
    nombre: "Martina Aguilar",
    pais: "Argentina",
    edad: 20,
    notas: [10, 10, 9],
  },
  { nombre: "Diego Méndez", pais: "México", edad: 24, notas: [5, 6, 7, 6] },
  { nombre: "Paula Vargas", pais: "Colombia", edad: 22, notas: [8, 9, 10] },
  { nombre: "Alejandro Núñez", pais: "Chile", edad: 21, notas: [7, 7, 6, 7] },
  { nombre: "Fernanda Soto", pais: "España", edad: 19, notas: [10, 9, 10, 9] },
];

/* Obtener solo los nombres de los estudiantes */
/* Crear un nuevo array que incluyan los nombres y el promedio de las notas */
function promedioNotas(arrayNotas) {
  const valorInicial = 0;
  let promedio = arrayNotas.reduce((acumulador, valorActual) => {
    return acumulador + valorActual;
  }, valorInicial);
  promedio = promedio / arrayNotas.length;
  return promedio;
}

let nuevoArray = estudiantesFunval2.map((estudiante) => {
  let objt = {}
  objt.nombre = estudiante.nombre;
  objt.promedio = promedioNotas(estudiante.notas).tofixed(2);
    return objt;
});
//nsole.log(nuevoArray);

/* filtra a todos los estudianetes que sean mayor de 21 años*/

let arrayMayores = estudiantesFunval2.filter
((estudiante) => estudiante.edad > 21);
//nsole.log(arrayMayores);

/* Filtrar a los estudiantes que tengan un promedio de notas mayor a 8 */

let estudianteReconocido = estudiantesFunval2.filter((estudiante) => {
    return promedioNotas(estudiante.notas) >=8;
})

/* Imprimir el nombre y el pais de cada estdudiante */
estudiantesFunval2.forEach((estudiante) => {
    console.log(`Nombre: ${estudiante.nombre}, País: ${estudiante.pais}`);
});

/* Imprimir todos los promedios */

nuevoArray.forEach((estudiante) => {
    console.log(`Nombre: ${estudiante.nombre}, Promedio: ${estudiante.promedio}`);
}   )

/* Encontrar al primer estuduiante de mexico */
let estudianteMexico = estudiantesFunval2.find((estudiante) => {
    return estudiante.pais === "México";
});
/* econtrar a paula vargas */
let estudiantePaula = estudiantesFunval2.find((estudiante) => {
    return estudiante.nombre === "Paula Vargas";
});
/* Buscar el indice del estudiante llamado tomas diaz*/
let indiceTomás = estudiantesFunval2.findIndex((estudiante) => {
    return estudiante.nombre === "Tomás Díaz";
});
/* verificar si el pais brasil esta en la lista de los paises incluidos */
let paisBrasil = estudiantesFunval2.some((estudiante) => {
    return estudiante.pais === "Brasil";
});
