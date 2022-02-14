const poke_container = document.getElementById('poke-container');
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5',
    dark: '#CDCDCD',
    fairy: '#FFCBDB',
    steel: '#ACB2B4'
}

const color_types = Object.keys(colors)

async function getPokemon(id)
{
    try
    {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    let response = await fetch(url);
    let data = await response.json();
    crearCard(data);
    }
    catch(err)
    {
        console.log(err);
    }
}

function init()
{

    let id = document.getElementById("id").value;
    const pokemon = getPokemon(id);
    console.log(pokemon);

}
function crearCard(pokemon)
{
    const pokeCard = document.createElement('div')
    pokeCard.classList.add('pokemon')

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    const ability1 = pokemon.abilities[0].ability.name;
    const move1 = pokemon.moves[0].move.name;
    const id = pokemon.id.toString().padStart(3, '0')
    const poke_types = pokemon.types.map(type => type.type.name)
    const type = color_types.find(type => poke_types.indexOf(type) > -1)
    
    const color = colors[type]

    pokeCard.style.backgroundColor = color

    const pokeTemp = `
    <div class="img-container">
        <img src="${pokemon.sprites.front_default}" alt="">
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span> </small>
    </div>
    <div>
    <table class="table">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Habilidad 1</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <th scope="row">Habilidad</th>
        <td>${ability1}</td>
        </tr>
    </tbody>
    </table>
    </div>
    `

    pokeCard.innerHTML = pokeTemp

    poke_container.appendChild(pokeCard)
}


function vaciar()
{
    poke_container.innerHTML = '';

}
