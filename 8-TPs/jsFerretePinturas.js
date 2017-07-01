/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{

var dato1 = 0;


dato1 = document.getElementById('Temperatura').value;
dato1= parseInt(dato1);



resultado = dato1 -32;
resultadof = resultado /1.8;

alert (dato1 + " Fahrenheit son " + resultadof + " grados centigrados");

}

function CentigradosFahrenheit () 
{

var dato1 = 0;


dato1 = document.getElementById('Temperatura').value;
dato1= parseInt(dato1);



resultado = dato1 *1.8;
resultadof = resultado +32;

alert (dato1 + " centigrados son " + resultadof + " grados Fahrenheit");


	
}
