
async function getData(){
    let tab = '';

    if(localStorage == null){
    const records = await fetch('https://rickandmortyapi.com/api/character/?limit=10000');
    json = await records.json(); 
    localStorage.setItem("jsonRick",JSON.stringify(json));
    }
    

    let data = JSON.parse(localStorage.getItem("jsonRick"));

    
    

    $("#taula").on("click", "#eliminar", function() {
        var col = $(this).closest("tr");
        var pos=col.find("td:eq(0)").html();
        delete data['results'][pos-1]
        localStorage.setItem("jsonRick", JSON.stringify(data));
        $(this).closest("tr").remove();
     });


     console.log(data);
    
   
 

    document.getElementById("tbody").innerHTML = tab;

    $('#taula').DataTable().destroy();
     
      $('#taula').DataTable({
        "data": data.results,
        "columns": [
            {"data" : "id"},
            {"data" : "name"},
            {"data" : "status"},
            {"data" : "species"},
            {
                render: function ( data, type, row ) {
                    return '<button type="button" class="btn btn-primary" id="eliminar">Eliminar</button>';
                }
            }
        ]
    });
}

   








   