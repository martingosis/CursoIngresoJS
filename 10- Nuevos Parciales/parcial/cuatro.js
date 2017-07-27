function Mostrar()
{
	var numero1=0;
	var numero2=0;
	var resultado=0;

	numero1 = prompt("ingrese numero 1"); 

	numero2 = prompt("ingrese numero 2");
 
 	if (numero1 == numero2){

 		resultado = numero1 * numero2;

 		alert("la multiplicacion es " + resultado);

 	 	}

 		else {

 		if(numero1>numero2){

 			resultado=numero1 - numero2;


 			alert("la resta es " + resultado);
 		}	

	
 			if(numero1<numero2){

 			resultado= numero1 - numero2;

 			document.write("la suma es " + resultado);


			}











	}

}
