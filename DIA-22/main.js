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

let datos = [
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

function mostrarSkeletons(cantidad) {
  const contenedor = document.getElementById("contenedor");
  contenedor.innerHTML = "";
  for (let i = 0; i < cantidad; i++) {
    const skeleton = document.createElement("div");
    skeleton.className = "p-4 bg-white rounded-lg shadow animate-pulse";
    skeleton.innerHTML = `
      
<div role="status" class="max-w-sm animate-pulse">
    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
    <span class="sr-only">Loading...</span>
</div>


    `;
    contenedor.appendChild(skeleton);
  }
}

function mostrarCards(datos) {
  const contenedor = document.getElementById("contenedor");
  contenedor.innerHTML = "";

  datos.forEach((persona) => {
    const card = document.createElement("div");
    card.className = "max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow";
    card.innerHTML = `
      

<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-end px-4 pt-4">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            <span class="sr-only">Open dropdown</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
            </svg>
        </button>
        <!-- Dropdown menu -->
        <div id="dropdown" class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
            <ul class="py-2" aria-labelledby="dropdownButton">
            <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
            </li>
            </ul>
        </div>
    </div>
    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
        <div class="flex mt-4 md:mt-6">
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
            <a href="#" class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message</a>
        </div>
    </div>
</div>

    `;
    contenedor.appendChild(card);
  });
}
mostrarSkeletons(3);
traerDatos()
  .then((datos) => {
    mostrarCards(datos);
  })
  .catch((error) => {
    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = `<p class="text-red-500">${error}</p>`;
  });
