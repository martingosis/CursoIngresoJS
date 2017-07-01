/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{

var dato1 = 0;
var dato2 = 0;
var dato3 = 0;
var suma 

dato1 = document.getElementById('PrecioUno').value;
dato1= parseInt(dato1);
dato2 = document.getElementById('PrecioDos').value;
dato2= parseInt(dato2);
dato3 = document.getElementById('PrecioTres').value;
dato3= parseInt(dato3);


suma = dato1 + dato2 + dato3;


alert ("la suma es: "+ suma);


}
function Promedio () 
{

var dato1 = 0;
var dato2 = 0;
var dato3 = 0;
var suma = 0;
var promedio = 0;

dato1 = document.getElementById('PrecioUno').value;
dato1= parseInt(dato1);
dato2 = document.getElementById('PrecioDos').value;
dato2= parseInt(dato2);
dato3 = document.getElementById('PrecioTres').value;
dato3= parseInt(dato3);


suma = dato1 + dato2 + dato3;
promedio = suma / 3;



alert ("el promedio es: "+ promedio);

	
}
function PrecioFinal () 

{

var dato1 = 0;
var dato2 = 0;
var dato3 = 0;
var suma = 0;
var promedio = 0;
var preciof = 0;
var perciofi = 0;

dato1 = document.getElementById('PrecioUno').value;
dato1= parseInt(dato1);
dato2 = document.getElementById('PrecioDos').value;
dato2= parseInt(dato2);
dato3 = document.getElementById('PrecioTres').value;
dato3= parseInt(dato3);


suma = dato1 + dato2 + dato3;
preciof = suma * 21 / 100;
preciofi = suma + preciof


alert ("el precio final es: "+ preciofi);





	
}