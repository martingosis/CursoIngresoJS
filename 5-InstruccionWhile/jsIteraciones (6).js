function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	

	while (contador<5)
   { 

	 		contador= contador+1;
	 		numero = prompt("ingrese numero "+ contador +" :");
	 		numero = perseInt(numero);
	 		acumulador = acumulador + numero;

	 	  
	}


	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN