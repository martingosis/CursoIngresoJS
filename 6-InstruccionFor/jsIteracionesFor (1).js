function Mostrar()
{

contador=0;
var respuesta="si";

for (;respuesta=="si";){ 


console.log ("hola"+contador);


if(contador==10){
break;

}

contador++;
respuesta=prompt("deja de salir por el for");

}

}