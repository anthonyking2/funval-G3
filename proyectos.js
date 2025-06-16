document.addEventListener("DOMContentLoaded", () => {
    const proyectos = [
        {
            titulo: "Landing Page Simple",
            descripcion: "Página promocional básica para producto o servicio.",
            imagen: "./img/proyectos/landing.png",
        },
{
            titulo: "Login Nexus",
            descripcion: "Página de login con validación básica.",
            imagen: "./img/proyectos/login.png",
        },
        {
            titulo: "Calculadora de Áreas",
            descripcion: "App que calcula el área de figuras geométricas básicas.",
            imagen: "./img/proyectos/calculadora.png",
            enlace: "./"
        },
        // Puedes agregar más aquí
    ];

    const contenedor = document.getElementById("contenedor-proyectos");

    proyectos.forEach((proyecto) => {
        const card = document.createElement("div");
        card.className = "bg-[#1E293B] p-4 rounded-lg shadow-md";

        card.innerHTML = `
      <img src="${proyecto.imagen}" alt="${proyecto.titulo}" class="w-full h-48 object-cover rounded mb-4">
      <h3 class="text-xl font-semibold text-[#E3FF6A]">${proyecto.titulo}</h3>
      <p class="text-[#8892B0] mt-2">${proyecto.descripcion}</p>
    `;

        contenedor.appendChild(card);
    });
});
