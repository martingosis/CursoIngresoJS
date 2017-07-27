function Mostrar()
{
  var venta;
  var input;
  var count = 0;
  var min=0;
  var max=0;
  
  while(count<4)
  {
    
    input = prompt("ingrese importe");
    venta = parseFloat(input);
    if(venta==0)
    {
      alert("No ingresado, igual a cero");
    }
    else
    {
      
      if(min>venta || min==0)
	min=venta;
      if(max<venta)
	max=venta;
      
      count++;
    }	
  }
        alert("el minimo fue: " + min );
	alert("el maximo fue: " + max );

}