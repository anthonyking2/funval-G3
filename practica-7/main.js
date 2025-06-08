/* lista de productos disponobles */
/* lista de productos disponibles */
const productos = [
  { nombre: "Laptop", precio: 1200 },
  { nombre: "Mouse", precio: 25 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Monitor", precio: 300 },
  { nombre: "Silla Gamer", precio: 450 },
  { nombre: "Audífonos", precio: 80 },
  { nombre: "Webcam", precio: 60 },
  { nombre: "USB 128GB", precio: 30 },
  { nombre: "Impresora", precio: 200 },
  { nombre: "Tablet", precio: 500 }
];

/* 1️. Recorrer y mostrar productos */

console.log("Lista de productos:");
/* 1️. Recorrer y mostrar productos */

console.log("Lista de productos:");
productos.forEach(producto => {
  console.log(`${producto.nombre} - $${producto.precio}`);
});

/* 2. crear array de nombres y verificar disponibilidad */
/* 2.1 */
let productosDisponibles = productos.map(p => p.nombre);
console.log("\n Productos disponibles:", productosDisponibles);
/* 2. crear array de nombres y verificar disponibilidad */
/* 2.1 */
let productosDisponibles = productos.map(p => p.nombre);
console.log("\n Productos disponibles:", productosDisponibles);

/* 2.2 */
let productoBuscado = "Mouse";
let estaDisponible = productosDisponibles.includes(productoBuscado);
console.log(`\n ¿Está disponible "${productoBuscado}"?`, estaDisponible ? "Sí" : "No");
/* 2.2 */
let productoBuscado = "Mouse";
let estaDisponible = productosDisponibles.includes(productoBuscado);
console.log(`\n ¿Está disponible "${productoBuscado}"?`, estaDisponible ? "Sí" : "No");

/* 3️. aplicar descuento del 10% */
let productosConDescuento = productos.map(p => ({
/* 3️. aplicar descuento del 10% */
let productosConDescuento = productos.map(p => ({
  nombre: p.nombre,
  precio: +(p.precio * 0.9)
  precio: +(p.precio * 0.9)
}));
console.log("\n Productos con 10% de descuento:", productosConDescuento);
console.log("\n Productos con 10% de descuento:", productosConDescuento);

/* 4️. Filtrar productos por precio <100 */
let productosBaratos = productos.filter(p => p.precio < 100);
console.log("\n Productos con precio menor a $100:", productosBaratos);
/* 4️. Filtrar productos por precio <100 */
let productosBaratos = productos.filter(p => p.precio < 100);
console.log("\n Productos con precio menor a $100:", productosBaratos);

/* 5️. Obtener primeros 2 productos */
let primerosDos = productos.slice(0, 2);
console.log("\n Primeros 2 productos:", primerosDos);
/* 5️. Obtener primeros 2 productos */
let primerosDos = productos.slice(0, 2);
console.log("\n Primeros 2 productos:", primerosDos);

/* 6️. Ordenar productos de mayor a menor */
let productosOrdenadosPorPrecio = [...productos].sort((a, b) => a.precio - b.precio);
console.log("\n Productos ordenados por precio (menor a mayor):", productosOrdenadosPorPrecio);
/* 6️. Ordenar productos de mayor a menor */
let productosOrdenadosPorPrecio = [...productos].sort((a, b) => a.precio - b.precio);
console.log("\n Productos ordenados por precio (menor a mayor):", productosOrdenadosPorPrecio);

/* 7️. Invertir orden de los productos */
let productosInvertidos = [...productos].reverse();
console.log("\n Productos en orden inverso:", productosInvertidos);
/* 7️. Invertir orden de los productos */
let productosInvertidos = [...productos].reverse();
console.log("\n Productos en orden inverso:", productosInvertidos);
