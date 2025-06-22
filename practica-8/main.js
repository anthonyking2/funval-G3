// Fondo animado de Vanta.js
VANTA.NET({
  el: "#vanta-bg",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x1bd2d2,
  backgroundColor: 0x131d2d
});

// Lógica del juego
const celdas = document.querySelectorAll('.cell');
const estado = document.getElementById('status');
const reinicio = document.getElementById('reset');

let tablero = ['', '', '', '', '', '', '', '', ''];
let jugador = 'X';
let jugando = true;

const ganar = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

celdas.forEach(celda => {
  celda.addEventListener('click', () => {
    const i = celda.dataset.i;
    if (!jugando || tablero[i]) return;

    tablero[i] = jugador;

const color = jugador === 'X' ? 'text-cyan-400' : 'text-white';
celda.innerHTML = `<span class="${color} text-6xl font-bold">${jugador}</span>`;


    if (ganar.some(p => p.every(j => tablero[j] === jugador))) {
      estado.textContent = `Ganó ${jugador}`;
      jugando = false;
    } else if (!tablero.includes('')) {
      estado.textContent = 'Empate';
      jugando = false;
    } else {
      jugador = jugador === 'X' ? 'O' : 'X';
      estado.textContent = `Turno de ${jugador}`;
    }
  });
});

reinicio.addEventListener('click', () => {
  tablero = ['', '', '', '', '', '', '', '', ''];
  jugador = 'X';
  jugando = true;
  estado.textContent = 'Turno de X';
  celdas.forEach(c => c.textContent = '');
});
