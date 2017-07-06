function Mostrar()
{
//tomo la edad  
var edad = 0;


edad = document.getElementById('edad').value;

if (!( edad > 12 && edad < 18))
{

alert ("la persona no es adolecente");
}

}//FIN DE LA FUNCIÓN