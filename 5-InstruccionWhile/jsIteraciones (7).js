function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var respuesta;
	var pregunta;



	while (respuesta == "si"){

	numero = prompt("ingrese numero ");
	numero = parseInt(numero);
	contador = contador+1;
	pregunta = contador
	acumulador = acumulador + numero;
	
	pregunta = prompt ("desea ingresar numero?");

	}

   	
  	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;


}//FIN DE LA FUNCIÓN