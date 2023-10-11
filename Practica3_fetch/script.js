
async function getData(){
    const records = await fetch('https://rickandmortyapi.com/api/character/?limit=10000');
    json = await records.json(); 
    let table;
    let tab = '';
    if(localStorage == null){
        localStorage.setItem("jsonRick",JSON.stringify(json));
    }



    data = JSON.parse(localStorage.getItem("jsonRick"));



 
    data.results.forEach(function (results) {
        tab += `<tr>
            <td>${results.name}</td>
            <td>${results.status}</td>
            <td>${results.species}</td>
        </tr>`
    });

  


    $("#taula").on("click", "#eliminar", function() {
        $(this).closest("tr").remove();
        delete data;
     });

    document.getElementById("tbody").innerHTML = tab;

      table =  $('#taula').DataTable({
        "data": data.results,
        "columns": [

            {"data" : "name"},
            {"data" : "status"},
            {"data" : "species"},
            {
                render: function () {
                    return '<button type="button" class="btn btn-primary" id="eliminar">Eliminar</button>';
                }
            }
        ]
    });
}

   








   