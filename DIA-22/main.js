/* let datos = [
    {
        nombre: "pepe",
        edad: 20,
    }] */

/* COMO SE CREAN PROMESAS */

/* let datos = [
  {
    nombre: "pepe",
    edad: 18,
  },
  {
    nombre: "juan",
    edad: 34,
  },
  {
    nombre: "kevin",
    edad: 28,
  },
];

function traerDatos() {
  let exito = false;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (exito) {
        resolve(datos);
      } else {
        reject("code :422 error con la peticion ");
      }
    }, 3000);
  });
}

traerDatos()
  .then((datos) => console.log(datos))
  .catch((err) => console.log(err));
 */

/* function hacerjugo() {
    let hayjugo = true;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (hayjugo) {
                resolve("jugo listo");
            } else {
                reject("no hay jugo aun");
            }
        }, 10000);
    });
}

setTimeout(() => {
    console.log("Me levanté");

    hacerjugo()
        .then((mensaje) => console.log(mensaje))
        .catch((error) => console.log(error));
}, 5000); */


/* function revisarNotas() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Notas revisadas");
            resolve(false);
        }, 3000);
    });
}

function promesaPlayStation(saliBien) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (saliBien) {
                resolve("Te Ganaste tu PlayStation 5!!!");
            } else {
                reject("No estudiaste :( no hay PlayStation5");
            }
        }, 5000);
    });
}

console.log("Esperando resultados del colegio...");

revisarNotas()
    .then((saliBien) => promesaPlayStation(saliBien))
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.log(error)); */

/* let datos = [
  {
    nombre: "pepe",
    edad: 18,
    pais: "Argentia",
  },
  {
    nombre: "juan",
    edad: 34,
    pais: "Peru",
  },
  {
    nombre: "kevin",
    edad: 28,
    pais: "Narnia",
  },
];

function traerDatos() {
  let exito = true;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (exito) {
        resolve(datos);
      } else {
        reject("no hay datos");
      }
    }, 7000);
  });
}
*/


let datos = [
  {
    nombre: "pepe",
    edad: 18,
    pais: "Argentina",
  },
  {
    nombre: "juan",
    edad: 34,
    pais: "Peru",
  },
  {
    nombre: "kevin",
    edad: 28,
    pais: "Narnia",
  },
  {
    nombre: "Thomas",
    edad: 28,
    pais: "Argentina",
  },
  {
    nombre: "Johan",
    edad: 28,
    pais: "Chile",
  },
  {
    nombre: "Juana",
    edad: 28,
    pais: "Chile",
  },
];


function traerDatos() {
  let exito = true;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (exito) {
        resolve(datos);
      } else {
        reject("error al traer los datos");
      }
    }, 3000);
  });
}

