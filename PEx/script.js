var taula = new Array();
var t = "";
$(document).ready(function(){
    async function cargarDatos() {
        const response = await fetch("https://rickandmortyapi.com/api/character/?limit=10000");
        const datos = await response.json();
        taula = datos;
        t = recargarTabla(taula);
        
        document.getElementById("tbody").innerHTML = t;
      }

    $("#SignIn").click(function(){
        $(".formLogin").hide();
        $(".TaulaDades").show();
        cargarDatos();
    });

    $("#taula").on("click", "#delete", function() {
        var col = $(this).closest("tr");
        var pos=col.find("td:eq(0)").html();
        for(var i = 0; i < taula.results.length; i++){
            if(taula.results[i]["id"] == pos){
                taula.results.splice(i,1);
            }
        }
        $(this).closest("tr").remove();
    });

    $("#añadir").click(function(){
        document.getElementById("tbody").innerHTML = "";
        var nombre = $('#nombre').val();
        var estado = $('#estado').val();
        var raza = $('#raza').val();
        var pos = taula.results.length+1;

        taula.results.push({"id":pos,"name":nombre,"status":estado,"species":raza});

        t = recargarTabla(taula);
        document.getElementById("tbody").innerHTML = t;

    });


    function recargarTabla(datos){
        var t = "";
        for (var i = 0; i < datos.results.length; i++) {
            var tr = "<tr>";
            tr+= "<td>" + datos.results[i]["id"] + "</td>";
            tr+= "<td>" + datos.results[i]["name"] + "</td>";
            tr+= "<td>" + datos.results[i]["status"] + "</td>";
            tr+= "<td>" + datos.results[i]["species"] + "</td>";
            tr+= "<td><button id='delete'>Eliminar</button></td>";
            t+=tr;
        }

        return t;
    }
});
