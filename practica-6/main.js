let saldo = 0;
let historial = [];

function mostrarMenu() {
  return prompt(
    "\n CUENTA BANCARIA\n \nSelecciona una opción:\n" +
      "1. Ingresar dinero\n" +
      "2. Retirar dinero\n" +
      "3. Consultar saldo\n" +
      "4. Ver historial\n" +
      "5. Salir\n"
  );
}

function ingresarDinero() {
  let cantidad = parseFloat(prompt("Ingrese la cantidad a depositar:"));
  if (cantidad > 0) {
    saldo += cantidad;
    historial.push(`Deposito: +$${cantidad.toFixed(2)}`);
    alert("Deposito exitoso.");
  } else {
    alert("El monto tiene que ser mayor a 0");
  }
}

function retirarDinero() {
  let cantidad = parseFloat(prompt("¿Cuanto desea retirar?:"));
  if (cantidad <= 0) {
    alert("El monto tiene que ser mayor a 0");
  } else if (cantidad > saldo) {
    alert("Saldo insuficiente");
  } else {
    saldo -= cantidad;
    historial.push(`Retiro: -$${cantidad.toFixed(2)}`);
    alert("Retiro exitoso");
  }
}

function consultarSaldo() {
  alert(`Saldo actual: $${saldo.toFixed(2)}`);
}

function verHistorial() {
  if (historial.length === 0) {
    alert("No realizaste ninguna transaccion");
  } else {
    alert("Historial de transacciones:\n" + historial.join("\n"));
  }
}

let opcion;
do {
  opcion = mostrarMenu();

  switch (opcion) {
    case "1":
      ingresarDinero();
      break;
    case "2":
      retirarDinero();
      break;
    case "3":
      consultarSaldo();
      break;
    case "4":
      verHistorial();
      break;
    case "5":
      alert("Adios!!!");
      break;
    default:
      alert("Intente de nuevo por favor");
  }
} while (opcion !== "5");
