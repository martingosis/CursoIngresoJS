/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
var dato1 = 0;
var descuento;
var resultadocondescuento;

dato1 = document.getElementById('importe').value;
dato1 = parseInt(dato1);


decuento = dato1 * 25 / 100;
resultadocondescuento = dato1 - decuento;


document.getElementById('resultado').value = resultadocondescuento;



}
