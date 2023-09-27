console.log("hol");

async function getData(){
    const records = await fetch('https://rickandmortyapi.com/api/character/?limit=10000');
    const data = await records.json();

    let tab = '';



    data.results.forEach(function (results) {
        tab += `<tr>
            <td>${results.name}</td>
            <td>${results.status}</td>
            <td>${results.species}</td>
        </tr>`
    });


    document.getElementById("tbody").innerHTML = tab;

        $('#taula').DataTable({
        "data": pokemon.results,
        "columns": [
            {"data" : "name"},
            {"data" : "status"},
            {"data" : "species"},
        ]
    });
}

   








   
