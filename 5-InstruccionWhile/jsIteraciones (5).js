function Mostrar()
{

var sexo = prompt("ingrese f ó m .");


while (sexo =="m" && sexo =="f")

{
    alert("reingrese el sexo");
    sexo = prompt ("reingrese el sexo");
}


document.getElementById('Sexo').value=sexo;


alert ("muchas gracias");



}//FIN DE LA FUNCIÓN