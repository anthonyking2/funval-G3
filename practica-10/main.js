async function fetchUsers() {
  const contenedor = document.querySelector('.users-container');

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    users.forEach(user => {
      contenedor.innerHTML += `
        <div class="bg-blue-400 text-white rounded shadow p-6 w-full max-w-xs sm:max-w-sm">
          <h3 class="font-bold text-lg mb-2">Nombre: ${user.name}</h3>
          <p><strong>Usuario:</strong> ${user.username}</p>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Empresa:</strong> ${user.company.name}</p>
        </div>
      `;
    });
  } catch (e) {
    contenedor.innerHTML = `
      <p class="text-red-600 bg-red-100 p-4 rounded text-center w-full max-w-md mx-auto">
        Error al cargar los usuarios. Inténtalo de nuevo más tarde.
      </p>
    `;
  }
}

fetchUsers();
