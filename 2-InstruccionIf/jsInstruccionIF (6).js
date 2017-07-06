function Mostrar()
{
//tomo la edad  
var edad = 0;


edad = document.getElementById('edad').value;

if ( edad > 17)
{
alert ("la persona es mayor de edad");
}

if (edad > 12 && edad < 18){

alert ("la persona es adolecente");

}

if (edad < 13)

{

alert ("la persona es menor");

}



}//FIN DE LA FUNCIÓN