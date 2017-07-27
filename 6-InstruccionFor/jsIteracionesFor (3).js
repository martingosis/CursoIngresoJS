function Mostrar()
{

	//var repetciones = prompt("ingrese el número de repeticiones");
	var cantidad=10000;
	var contador1=0;
	var contador2=0;
	var contador3=0;
	var contador4=0;
	var contador5=0;
	var numero;

	for(contador=0; contador<cantidad; contador ++){
		numero= Math.floor((Math.random() * 10) + 1);

			switch (numero){
		
			case 1:
			contador1++;
			break;
		
			case 2:
			contador2++;
			break;

			case 3:
			contador3++;
			break;

			case 4:
			contador4++;
			break;

			case 5:
			contador5++;
			break;

		}

		console.log(cantidad);

	}
}//FIN DE LA FUNCIÓN