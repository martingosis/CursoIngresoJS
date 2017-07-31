/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
function comenzar()
{

var numeroSecreto;
var numero=0;


numeroSecreto = Math.floor((Math.random() * 10) + 1);



console.log(numeroSecreto);




}


function verificar()
{
	
	var numero;
	var numeroSecreto;

	numero=document.getElementById('numero').value;
	numeroSecreto = Math.floor((Math.random() * 10) + 1);


	if(numeroSecreto == numero){
	
		alert("Usted es un ganador");

	 }

	if(numeroSecreto != numero){
	
		alert("Usted es un perdedor");

	 }





	
}