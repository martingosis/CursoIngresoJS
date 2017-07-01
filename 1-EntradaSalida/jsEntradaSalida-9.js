/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

var dato1 = 0;
var resultado = 0;


dato1 = document.getElementById('sueldo').value;
dato1= parseInt(dato1);

resultado = dato1 *10 / 100;

document.getElementById('resultado').value = resultado + dato1;














}
