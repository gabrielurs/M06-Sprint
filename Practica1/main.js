let datos = [];
contador = 0;
let ul;

function afegirArray(){
    datos.push(document.getElementById("input").value);
        contador = contador + 1;
        document.getElementById("contador").innerHTML = contador;
}



function mostrarArray(){
    if(document.getElementById("objetos")!=null){
        document.getElementById("objetos").innerHTML = "";
    }

    ul = document.createElement('ul');
    ul.setAttribute('id', 'lista');

    document.getElementById('objetos').appendChild(ul);
    datos.forEach(crearLi);
}



function crearLi(element) {
    let li = document.createElement('li');
    li.setAttribute('class','item');


    let boton = document.createElement('button')
    boton.id="botonBorrar";
    boton.innerText = 'Borrar';

    ul.appendChild(li);
    ul.appendChild(boton);

    li.innerHTML=li.innerHTML + element;

    boton.addEventListener('click', () => {
       //Obtener la posicion del elemento que se quiere borrar
       let posicion = datos.indexOf(element);
       //Borrar el elemento
       datos.splice(posicion, 1); 

        mostrarArray();
        contador = contador - 1;
        document.getElementById("contador").innerHTML = contador;
      })
}
