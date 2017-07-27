function Mostrar()
{
	var importe = 0;
	var iva = 0;
	var importef = 0;


	importe = prompt("favor de ingresar el importe");
	importe = parseInt(importe);

	iva = importe *21 /100;
	importef = importe + iva;

	document.getElementById('importeFinal').value = importef;





  
}
