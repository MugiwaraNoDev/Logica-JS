// Función para calcular factorial
function calcularFactorial() {
    // Obtener el valor ingresado
    var num = parseInt(document.getElementById("numero").value);

        var factorial = 1;

        // Calcular el factorial
        for (var i = num; i >= 1; i--) {
            factorial *= i;
        }

        // Resultado en pantalla
        var resultadoElement = document.getElementById("resultado");
        resultadoElement.innerHTML = "El factorial de " + numero + " es: " + factorial;

        // Resultado en la consola
        console.log("El factorial de " + numero + " es: " + factorial);
    
}
