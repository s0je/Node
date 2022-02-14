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


async function crearCard(pokemon)
{
    try
    {
        let id = document.getElementById("id").value;
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

        let response = await fetch(url);
        let data = await response.json();

        const pokeCard = document.createElement('div')
        pokeCard.classList.add('pokemon')
        const name = data.name[0].toUpperCase() + data.name.slice(1)
        const e = data.id.toString().padStart(3, '0')
        const poke_types = data.types.map(type => type.type.name)
        const type = color_types.find(type => poke_types.indexOf(type) > -1)    
        const color = colors[type]

        pokeCard.style.backgroundColor = color

        const pokeTemp = `
        <div class="img-container">
            <img src="${data.sprites.front_default}" alt="">
        </div>
        <div class="info">
            <span class="number">#${e}</span>
            <h3 class="name">${name}</h3>
            <small class="type">Type: <span>${type}</span> </small>
        </div>
        `
        let temp = '';
        let j = 1;
        let i = 0;
        for(let abi of data.abilities)
        {
            
            temp += 
                    `<th scope="row">${j}</th>
                    <td>${abi.ability.name}</td> `
            j++;
        }
        console.log(temp);
        let table = `<table class="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Habilidad</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr id="habilidad">
                         ${temp}                         
                        </tr>
                        </tbody>
                    </table>`
        pokeCard.innerHTML = pokeTemp + table
        poke_container.appendChild(pokeCard)
    }
    catch(err)
    {
        console.log(err);
    }
    
   
}

async function abilities(name)
{
    try
    {
        let url = `https://pokeapi.co/api/v2/ability/${name}/`
        let response = await fetch(url);
        let data = await response.json();
        
    }
    catch(err)
    {
        console.log(err)
    }
}

function vaciar()
{
    poke_container.innerHTML = '';

}
