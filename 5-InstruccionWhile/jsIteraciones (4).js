function Mostrar()
{

    var numero = prompt("ingrese un número entre 0 y 9.");
    

    while (numero > 9 || numero < 0)
    
    {

    alert("reingrese");
    numero = prompt ("reingrese el numero");
    
    }

    alert ("GENIAL");


}//FIN DE LA FUNCIÓN