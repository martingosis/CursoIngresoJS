/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
	var dato = 0;
	var dato2 = 0;
   
dato = document.getElementById('elNombre').value;
//esto me devuelve lo que coloco en el texto dato

dato2 = document.getElementById('laEdad').value;
//esto me devuelve lo que coloco en el texto dato2

alert("usted se llama " + dato + " y tiene " + dato2 + " años");


}

