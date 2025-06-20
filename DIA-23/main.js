let contenedor = document.querySelector("#contenedor");

for (let i = 1; i <= 10; i++) {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
      // Crear un elemento de imagen
      const img = document.createElement("img");
      img.src = data.message; // data.message contiene la URL de la imagen
      img.alt = "Perro aleatorio";
      img.style.width = "200px";
      img.style.margin = "10px";

      // Agregar la imagen al contenedor
      contenedor.appendChild(img);
    })
    .catch((error) => console.error("Error al obtener la imagen:", error));
}
