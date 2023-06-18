const matrizMag = [[8, 1, 6], [3, 5, 7], [4, 9, 2]];

function MatrizMagica(matriz){

//Calcular la suma de la primera fila 
	const sumFila1 = matriz[0][0] + matriz[0][1] + matriz[0][2];

//Inicializacion del arreglo
	const sumas = [sumFila1, 0, 0, 0];

//verificar sumas de fulas y columnas
		for (var i = 0; i < 3; i++){
			var sumFila = 0;
			var sumColumna = 0;


			for (var j = 0; j < 3; j++) {
				sumFila += matriz[i][j];
				sumColumna += matriz[j][i]
			}

			if (sumFila !== sumFila1 || sumColumna !== sumFila1) {
				return false;

			}
		}

//Calcular sumas de diagonales

		sumas[1] = matriz[0][0] + matriz[1][1] + matriz[2][2];
		sumas[2] = matriz[0][2] + matriz[1][1] + matriz[2][0];

//Verificar si la suma de diagonales, es igual de 
		if (sumas[1] !== sumFila1 || sumas[2] !== sumFila1) {
			return false;
		}

//Almacenar la suma total
		sumas[3] = sumFila1;


//verificar el resulado
		return { magica: true, sumas: sumas };
	}


	const resultado = MatrizMagica(matrizMag);

	if (resultado.magica) {
		console.log(`La matriz es magica. `);
		console.log(`La suma total es: `, resultado.sumas[3]);
	} else {
		console.log(`La matriz no es magica. `);
	}
