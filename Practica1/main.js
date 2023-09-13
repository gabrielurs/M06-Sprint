let datos = [];
contador = 0;



function afegirArray(){
    datos.push(document.getElementById("input").value);
        contador = contador + 1;
        document.getElementById("contador").innerHTML = contador;
}



function mostrarArray(){
        let string = JSON.stringify(datos);
        document.querySelector(".objetos").innerHTML = string;

        const boton = document.createElement('button')
        boton.id="botonBorrar";
        boton.innerText = 'Borrar';
        if(document.getElementById("botonBorrar")== null){
            document.body.appendChild(boton);
        }

        boton.addEventListener('click', () => {
            datos.pop();
            mostrarArray();
          })
}


  



