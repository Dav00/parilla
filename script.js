window.onload = iniciar;
window.onkeypress = switchTecla;
function iniciar()
{
	var contador = 0;
	var impar = true;
	var contadorAux = 1;    
	var ele = crearNodo('div','','escribidor');
	ele.classList.add('tipo0');
	crearNodo('div','','contenedor');
			for(let i = 0; i < 9; i++)
			{
				for(let j = 0; j < 9; j++)
				{
                    var ele = crearNodo('div',contador,'caja'+i+j);
                    document.getElementById('contenedor').appendChild(ele);
                    ele.appendChild
					if(impar)
					{
						ele.classList.add("tipo1");
						ele.addEventListener('mouseover', mostrarContenido);
                        impar = false;
					}
					else
					{
						ele.classList.add("tipo2");
                        impar = true;
					}
					if(contadorAux == 9)
					{
						contador++;				
					}
					if(contadorAux == 10)
					{
							ele.style.clear = 'left';	
							contadorAux = 1;		
					}			
					contador++;
					contadorAux++;
				}
            }
}
			function mostrarContenido()
			{
				document.getElementById('escribidor').innerHTML = this.innerHTML;
			}
			function crearNodo(tipo, inner, id)
        	{
				// crea el nodo, lo pone en el body
				var ele = document.createElement(tipo);
				//append child es añadir un hijo
				document.body.appendChild(ele);

				ele.innerHTML = inner; // contenido
				ele.id = id; // id del nodo
				return ele; // retorna la referencia
            }     
            function switchTecla(e)
            {
                if(e.code == 'Digit1')
                {
                   document.getElementById("linkEstilos").href = "estilo1.css";
                }
                if(e.code == 'Digit2')
                {
                    document.getElementById("linkEstilos").href = "estilo2.css";
				}
				 if(e.code == 'Digit3')
				 {
					 document.getElementById("linkEstilos").href = "estilo3.css";
				}
				if(e.code == 'Digit4')
                {
                    document.getElementById("linkEstilos").href = "estilo4.css";
                }
            }