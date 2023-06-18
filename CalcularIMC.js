function calculoIMC(peso, altura) {
	
	var alturaMetro = altura / 100;

	//Calculo de IMC 
	var imc = peso / (alturaMetro * alturaMetro);

	//Verificar condicion
	if (imc >= 18.5 && imc <= 25) {
		return "Estas saludable con un peso normal";
	} else if (imc < 18.5) {
		return "Estas bajo del peso normal";
	} else {
		return "Tienes sobrepeso";
	}
}

//Ingreso de datos
var IngPeso = prompt("Ingrese el peso (Kg)");
var IngAltura = prompt("Ingrese la altura (Cm)");

var result = calculoIMC(IngPeso, IngAltura);
alert(result);
