document.addEventListener("DOMContentLoaded", () => {
    const proyectos = [
        {
            titulo: "Pagina Web Simple",
            descripcion: "Descripcion de Programador Carlo Bravo.",
            imagen: "./img/practica1.png",
            enlace: "./practica 1/index.html"
        },
        {
            titulo: "Login Nexus",
            descripcion: "Página de login con validación básica.",
            imagen: "./img/practica2.png",
            enlace: "./practica 2/index.html",
        },
        
        {
            titulo: "Landing Page Simple",
            descripcion: "Página web simple utilizando HTML y CSS.",
            imagen: "./img/practica3.png",
            enlace: "./practica 3/index.html"
        },
        {
            titulo: "Calculadora de Areas",
            descripcion: "Programa que permite calcular el área de diferentes figuras geométricas: cuadrados, rectángulos y triángulos.",
            imagen: "./img/practica5.png",
            enlace: "./practica 5/index.html"
        },
        {
            titulo: "Cuenta Bancaria",
            descripcion: "Simulación del funcionamiento básico de una cuenta bancaria",
            imagen: "./img/practica6.png",
            enlace: "./practica-6/index.html"
        },
        
        {
            titulo: "Metodos de Arrays",
            descripcion: "Ejercicios de Métodos de Arrays en JavaScript",
            imagen: "./img/practica7.png",
            enlace: "./practica-7/index.html"
        },
        {
            titulo: "TIC-TAC-TOE",
            descripcion: "Frontend Mentor - Tic Tac Toe Game",
            imagen: "./img/practica8.png",
            enlace: "./practica-8/index.html"
        },
        {
            titulo: "Implementación de async/await",
            descripcion: "Uso de async y await, en JavaScript",
            imagen: "./img/imagen10.png",
            enlace: "./practica-10/index.html"
        },
    ];

    const contenedor = document.getElementById("contenedor-proyectos");

    proyectos.forEach((proyecto) => {
        const card = document.createElement("div");
        card.className = "bg-[#1E293B] p-4 rounded-lg shadow-md";

        card.innerHTML = `
  <img src="${proyecto.imagen}" alt="${proyecto.titulo}" class="w-full h-48 object-cover rounded mb-4">
  <h3 class="text-xl font-semibold text-[#E3FF6A]">${proyecto.titulo}</h3>
  <p class="text-[#8892B0] mt-2">${proyecto.descripcion}</p>
  ${proyecto.enlace ? `
    <a href="${proyecto.enlace}" target="_blank" class="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
      Ver Proyecto
    </a>
  ` : ''}
`;


        contenedor.appendChild(card);
    });
});
