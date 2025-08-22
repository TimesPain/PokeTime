
const content = document.querySelector('#app');
const pokemon = 'https://pokeapi.co/api/v2/pokemon/';

const inputTerm = '56';

const searchTerm = pokemon + inputTerm;

fetch(searchTerm)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        content.innerHTML = `
<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg" />`;
    })
    .catch(error => {
        alert('Error fetching Pokémon data:', error);
    });



