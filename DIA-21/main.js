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

function saludar(nombre) {
    console.log("Hola, " + nombre + "!");
}

function superSaludo(nombre, callback) {
    console.log("Iniciando saludo...");
    callback(nombre);
}
superSaludo("Pepito", saludar);

/* MAP */

let notasDoble = notas.map((nota) => nota * 2);{    
    console.log(notasDoble);
}
/* filter */
 let notasAprob= notas.filter((nota) => nota > 51);{
 }