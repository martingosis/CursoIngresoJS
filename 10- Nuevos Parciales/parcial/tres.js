function Mostrar()
{
	var ancho=0;
	var alto=0;
	var perimetro=0;

	alto = document.getElementById('alrgo').value;
	alto = parseInt(alto);

	ancho = document.getElementById('ancho').value;
	ancho = parseInt(ancho);

	perimetro = alto * 2 + ancho * 2;

	alert ("se necesitan "  + perimetro + " metros de alambre");


	



}
