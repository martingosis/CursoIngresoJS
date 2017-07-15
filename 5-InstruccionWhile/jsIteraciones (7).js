function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var nota=0;
	var notamayor=0;
	var notamenor;

	while (contador<3) 
	{	

	    console.log("vuelta" + contador);

	   	
	    nota=prompt("ingrese nota");
	    nota = parseInt(nota);
	    contador = contador+1;
	    acumulador = acumulador + nota;
	    
        
        //if (contador==1) {

        if(nota>notamayor)  { 

	    		notamayor=nota;
			}  

		if (nota<notamenor) {

			notamenor=nota;
		}	

		///if (contador==1) {
		
		//}

		//if (notamayor<numero) {

		//}

		//if (notamenor>numero) {


		//}


	  
	}

	console.log("notamayor " + notamayor);
	console.log("notamenor " + notamenor);


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN