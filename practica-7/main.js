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

/// 1️⃣ Recorrer y mostrar productos (forEach)
console.log("📦 Lista de productos:");
productos.forEach(producto => {
  console.log(`${producto.nombre} - $${producto.precio}`);
});

/// 2️⃣ Crear array de nombres + verificar disponibilidad
// Parte 1
const productosDisponibles = productos.map(p => p.nombre);
console.log("\n📋 Productos disponibles:", productosDisponibles);

// Parte 2
const productoBuscado = "Monitor";
const estaDisponible = productosDisponibles.includes(productoBuscado);
console.log(`\n🔍 ¿Está disponible "${productoBuscado}"?`, estaDisponible ? "Sí" : "No");

/// 3️⃣ Aplicar descuento del 10%
const productosConDescuento = productos.map(p => ({
  nombre: p.nombre,
  precio: +(p.precio * 0.9).toFixed(2) // Redondeamos a 2 decimales
}));
console.log("\n💸 Productos con 10% de descuento:", productosConDescuento);

/// 4️⃣ Filtrar productos por precio < $100
const productosBaratos = productos.filter(p => p.precio < 100);
console.log("\n🎯 Productos con precio menor a $100:", productosBaratos);

/// 5️⃣ Obtener primeros 2 productos
const primerosDos = productos.slice(0, 2);
console.log("\n📋 Primeros 2 productos:", primerosDos);

/// 6️⃣ Ordenar productos por precio ascendente
const productosOrdenadosPorPrecio = [...productos].sort((a, b) => a.precio - b.precio);
console.log("\n📈 Productos ordenados por precio (menor a mayor):", productosOrdenadosPorPrecio);

/// 7️⃣ Invertir orden de los productos
const productosInvertidos = [...productos].reverse();
console.log("\n🔄 Productos en orden inverso:", productosInvertidos);
