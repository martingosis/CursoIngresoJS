function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;


switch (mesDelAño) {

case "Febrero":

	alert("Este mes tiene 28 dias");

		break;

	case "Enero":

	case "Marzo":

	case "Mayo":

	case "Julio":

	case "Agosto":

	case "Octubre":

	case "Diciembre":

	alert("Este mes tiene 30 o más días");
	
		break;

	case "Abril":

	case "Junio":

	case "Septiembre":

	case "Noviembre":

	alert ("Este mes no tiene mas de 30 dias");

	break;	

}	


    

    	



}//FIN DE LA FUNCIÓN