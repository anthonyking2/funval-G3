/* 1.  **Menú Principal:**

    * El programa mostrará un menú con las siguientes opciones:

        * Calcular el área de un cuadrado.

        * Calcular el área de un rectángulo.

        * Calcular el área de un triángulo.
2.  **Selección de Opción:**

    * El usuario deberá ingresar el número correspondiente a la operación que desea realizar.

3.  **Solicitud de Datos:**

    * Dependiendo de la opción seleccionada, el programa solicitará los datos necesarios:

        * **Cuadrado:** Lado.

        * **Rectángulo:** Base y altura.

        * **Triángulo:** Base y altura.

4.  **Cálculo y Resultado:**

    * El programa realizará el cálculo del área utilizando las fórmulas correspondientes:

        * **Cuadrado:** Área = lado * lado

        * **Rectángulo:** Área = base * altura

        * **Triángulo:** Área = (base * altura) / 2

    * El resultado del área se mostrará en pantalla.

5.  **Manejo de Errores:**

    * Si el usuario ingresa una opción no válida o datos incorrectos, el programa mostrará un mensaje de error y solicitará que se ingrese la información nuevamente. */

let opcion = prompt(
  "///// Ingrese una opción: /////\n" +
  "1. Calcular área de un Cuadrado\n" +
  "2. Calcular área de un Rectángulo\n" +
  "3. Calcular área de un Triángulo\n"
);

if (opcion === "1") {
  let lado = parseFloat(prompt("Ingrese el lado del cuadrado:"));
  if (isNaN(lado) || lado <= 0) {
    alert("Error: El valor ingresado no es válido. Intente nuevamente.");
  } else {
    let areaCuadrado = lado * lado;
    alert("El área del cuadrado es: " + areaCuadrado);
  }
}
else if (opcion === "2") {
  let base = parseFloat(prompt("Ingrese la base del rectángulo:"));
  let altura = parseFloat(prompt("Ingrese la altura del rectángulo:"));
  if (isNaN(base) || base <= 0 || isNaN(altura) || altura <= 0) {
    alert("Error: Los valores ingresados no son válidos. Intente nuevamente.");
  } else {
    let areaRectangulo = base * altura;
    alert("El área del rectángulo es: " + areaRectangulo);
  }
}
else if (opcion === "3") {
  let base = parseFloat(prompt("Ingrese la base del triángulo:"));
  let altura = parseFloat(prompt("Ingrese la altura del triángulo:"));
  if (isNaN(base) || base <= 0 || isNaN(altura) || altura <= 0) {
    alert("Error: Los valores ingresados no son válidos. Intente nuevamente.");
  } else {
    let areaTriangulo = (base * altura) / 2;
    alert("El área del triángulo es: " + areaTriangulo);
  }
}
else {
  alert("Error: Opción no válida. Por favor, ingrese una opción entre 1 y 3.");
}

