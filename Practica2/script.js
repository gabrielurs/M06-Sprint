
function mostrarDiv1(){
        document.getElementById('Estil1').style.visibility = 'visible';
        document.getElementById('Estil2').style.visibility = 'hidden';
        document.getElementById('Estil3').style.visibility = 'hidden';

        if(document.getElementById('boton1').clicked == true){
            alert('El boton 1 ha sido presionado');
        }
}

function mostrarDiv2(){
    document.getElementById('Estil1').style.visibility = 'hidden';
    document.getElementById('Estil2').style.visibility = 'visible';
    document.getElementById('Estil3').style.visibility = 'hidden';
}

function mostrarDiv3(){
    document.getElementById('Estil1').style.visibility = 'hidden';
    document.getElementById('Estil2').style.visibility = 'hidden';
    document.getElementById('Estil3').style.visibility = 'visible';
}


