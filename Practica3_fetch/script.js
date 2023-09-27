let pokemon;

fetch('https://rickandmortyapi.com/api/character/?limit=10000', {
    method: 'GET',
})
   .then(response => response.json())
   .then(response => localStorage.setItem("pokemon", JSON.stringify(response)))
   

   pokemon = JSON.parse(localStorage.getItem("pokemon"));

   var table = document.querySelector('.table');
   var tableBody = table.querySelector('tbody');

    for (let i = 0; i < pokemon.results.length; i++) {
        var row = document.createElement('tr');
        var nombre = document.createElement('td');
        var estado = document.createElement('td');
        var species = document.createElement('td');
        nombre.textContent = pokemon.results[i].name;
        estado.textContent = pokemon.results[i].status;
        species.textContent = pokemon.results[i].species;

        row.appendChild(nombre);
        row.appendChild(estado);
        row.appendChild(species);
        tableBody.appendChild(row);
    }

   
    console.log(JSON.parse(localStorage.getItem("pokemon")));
