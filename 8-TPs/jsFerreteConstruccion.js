/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

var dato1 = 0;
var dato2 = 0;
var suma = 0;


dato1 = document.getElementById('Largo').value;
dato1= parseInt(dato1);
dato2 = document.getElementById('Ancho').value;
dato2= parseInt(dato2);
//dato3 = document.getElementById('PrecioTres').value;
//dato3= parseInt(dato3);


suma = dato1 + dato2;
sumat = suma *2;
sumaf = sumat *3;

alert ("la suma es: "+ sumaf);


}
function Circulo () 
{
	
var dato1 = 0;


dato1 = document.getElementById('Radio').value;
dato1= parseInt(dato1);

radio = dato1 *2;
radio2 = radio *3.14;
radiof = radio2 *3;


alert ("el alambre en cm es: "+ radiof);


}
function Materiales () 
{
	
var dato1 = 0;
var dato2 = 0;
var suma = 0;

dato1 = document.getElementById('Largo').value;
dato1= parseInt(dato1);
dato2 = document.getElementById('Ancho').value;
dato2= parseInt(dato2);
//dato3 = document.getElementById('PrecioTres').value;
//dato3= parseInt(dato3);


multi1 = dato1 *2
multi2 = dato2 *3

alert ("se nesecitan: " + multi1 + " bolsas de cemento " + multi2 + " bolsas de cal ");



}