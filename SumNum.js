var suma = 0;
var numero;

while (true) {
  numero = prompt("Ingrese un número:");

  // Verificar si se ingreso un número válido
  if (numero === null) {
    break; // Se presionó "Cancelar" para salir del bucle
  }

  // Convertir el valor ingresado a un número
  numero = parseFloat(numero);

  // Verificar si el número es válido
  if (isNaN(numero)) {
    alert("Por favor, ingrese un número válido.");
    continue; // Reiniciar el ciclo sin sumar
  }

  // Sumar el número ingresado a la suma total
  suma += numero;
}

// Mostrar la suma total
alert("La suma de los números ingresados es: " + suma);
