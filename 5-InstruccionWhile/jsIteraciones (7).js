function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var respuesta="si";
	



	while (respuesta == "si"){

	numero = prompt("ingrese numero ");
	numero = parseInt(numero);
	contador = contador+1;
	acumulador = acumulador + numero;
	
	respuesta = prompt ("desea ingresar un numero mas?");

	}



   	
  	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;


}//FIN DE LA FUNCIÓN