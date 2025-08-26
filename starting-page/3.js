const pokemon = 'https://pokeapi.co/api/v2/pokemon/charizard/';


fetch(pokemon)
    .then(response => response.json())
    .then(data => {
        console.log(data.stats.map(stat=>stat.base_stat));
    })
    .catch(e=>
        console.log(e)
    )
