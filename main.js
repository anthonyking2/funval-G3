document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    toggleBtn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("contenedor-habilidades");

  habilidades.forEach((habilidad) => {
    const card = document.createElement("div");
    card.className = "text-center hover:scale-110 transition duration-300";

    card.innerHTML = `
      <img src="${habilidad.icono}" alt="${habilidad.nombre}" class="w-12 mx-auto" />
      <p class="mt-2 font-semibold text-white">${habilidad.nombre}</p>
      <p class="text-sm text-[#8892B0]">${habilidad.nivel}</p>
    `;

    contenedor.appendChild(card);
  });
});
