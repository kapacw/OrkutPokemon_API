const pokemonName = document.querySelector('.pokeName');
const pokemonNumber = document.querySelector('.pokeNumber');
const pokemonImage = document.querySelector('.animatedPhoto');

const pokemonNameProfile = document.querySelector('.profileName');
const staticpPhoto = document.querySelector('.staticpPhoto');

const greetingsPokemon = document.querySelector('.greetingsPokemon');

const form = document.querySelector('.form');
const input = document.querySelector('.input');

const random = document.getElementById('randomMove');

const type = document.getElementById('pokemonType');

const hpBar = document.getElementById('hpBar');
const hpBarEffort = document.getElementById('hpEffort');

const attBar = document.getElementById('attBar');
const attBarEffort = document.getElementById('attEffort');

const defBar = document.getElementById('defBar');
const defBarEffort = document.getElementById('defEffort');

const attEsBar = document.getElementById('attEsBar');
const attEsBarEffort = document.getElementById('attEsEffort');

const defEsBar = document.getElementById('defEsBar');
const defEsBarEffort = document.getElementById('defEsEffort');

const speedBar = document.getElementById('speedBar');
const speedBarEffort = document.getElementById('speedEffort');

const seeMoreButton1 = document.querySelector('.seeMoreButton1');
const seeMoreButton2 = document.querySelector('.seeMoreButton2');
const seeLessButton = document.querySelector('.seeLessButton');
const secctionFriend = document.querySelector('.secctionFriend');

let pokeData = 1;

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponse.status == 200) {
        const data = await APIResponse.json();
        return data;
    }
}

const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon);

    if (data) {
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = "#" + data.id;
        pokeData = data.name;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'] || data['sprites']['front_default'];

        
        pokemonNameProfile.innerHTML = data.name;
        staticpPhoto.src = data['sprites']['front_default'];

        greetingsPokemon.innerHTML = data.name;

        type.innerHTML = `espécie: ${data.types.map(type => type.type.name).join(', ')}`;

        const phrases = [data['moves']['0']['move']['name'],
        data['moves']['1']['move']['name'],
        data['moves']['2']['move']['name'],
        data['moves']['3']['move']['name'],
        data['moves']['4']['move']['name'],
        data['moves']['5']['move']['name'],
        data['moves']['6']['move']['name'],
        data['moves']['7']['move']['name'],
        data['moves']['8']['move']['name'],
        data['moves']['9']['move']['name']
        ];
        const expressions = ["!", "!?", "...", "?"];

        const randomExpressions = Math.floor(Math.random() * expressions.length);
        const randomNumber = Math.floor(Math.random() * phrases.length);

        random.innerHTML = phrases[randomNumber] + expressions[randomExpressions];
        ///////////////////////////////////////////////////////////////////////////////////////////////////
        const hp = data['stats']['0']['base_stat'];

        const percentHp = Math.trunc((hp * 100) / 255);

        hpBar.style.width = percentHp + "%";
        document.getElementById("statHp").innerHTML = hp;
        document.getElementById("percentHp").innerHTML = percentHp + "%";
        ///////////////////////////////////////////////////////////////////////////////////////////////////
        const hpEf = data['stats']['0']['effort'];;

        const percentHpEffort = Math.trunc((hpEf * 100) / 4);

        if (hpEf == 0) {
            hpBarEffort.style.width = "50px";
            hpBarEffort.style.backgroundColor = "gray"
            document.getElementById("percentHpEffort").style.color = "gray";
            document.getElementById("statHpEffort").innerHTML = hpEf;
            document.getElementById("percentHpEffort").innerHTML = percentHpEffort + "%";
        } else {
            hpBarEffort.style.backgroundColor = "#ED2590"
            document.getElementById("percentHpEffort").style.color = "#ED2590";
            hpBarEffort.style.width = percentHpEffort + "%";
            document.getElementById("statHpEffort").innerHTML = hpEf;
            document.getElementById("percentHpEffort").innerHTML = percentHpEffort + "%";
        }
        ///////////////////////////////////////////////////////////////////////////////////////////////////
        const att = data['stats']['1']['base_stat'];

        const percentAtt = Math.trunc((att * 100) / 181);

        attBar.style.width = percentAtt + "%";
        document.getElementById("statAtt").innerHTML = att;
        document.getElementById("percentAtt").innerHTML = percentAtt + "%";
        ///////////////////////////////////////////////////////////////////////////////////////////////////
        const attEf = data['stats']['1']['effort'];;

        const percentAttEffort = Math.trunc((attEf * 100) / 4);

        if (attEf == 0) {
            attBarEffort.style.width = "50px";
            attBarEffort.style.backgroundColor = "gray"
            document.getElementById("percentAttEffort").style.color = "gray";
            document.getElementById("statAttEffort").innerHTML = attEf;
            document.getElementById("percentAttEffort").innerHTML = percentAttEffort + "%";
        } else {
            attBarEffort.style.backgroundColor = "#ED2590"
            document.getElementById("percentAttEffort").style.color = "#ED2590";
            attBarEffort.style.width = percentAttEffort + "%";
            document.getElementById("statAttEffort").innerHTML = attEf;
            document.getElementById("percentAttEffort").innerHTML = percentAttEffort + "%";
        }
        ///////////////////////////////////////////////////////////////////////////////////////////////////
        const def = data['stats']['2']['base_stat'];

        const percentDef = Math.trunc((def * 100) / 230);

        defBar.style.width = percentDef + "%";
        document.getElementById("statDef").innerHTML = def;
        document.getElementById("percentDef").innerHTML = percentDef + "%";
        ///////////////////////////////////////////////////////////////////////////////////////////////////
        const defEf = data['stats']['2']['effort'];;

        const percentDefEffort = Math.trunc((defEf * 100) / 4);

        if (defEf == 0) {
            defBarEffort.style.width = "50px";
            defBarEffort.style.backgroundColor = "gray"
            document.getElementById("percentDefEffort").style.color = "gray";
            document.getElementById("statDefEffort").innerHTML = defEf;
            document.getElementById("percentDefEffort").innerHTML = percentDefEffort + "%";
        } else {
            defBarEffort.style.backgroundColor = "#ED2590"
            document.getElementById("percentDefEffort").style.color = "#ED2590";
            defBarEffort.style.width = percentDefEffort + "%";
            document.getElementById("statDefEffort").innerHTML = defEf;
            document.getElementById("percentDefEffort").innerHTML = percentDefEffort + "%";
        }
        ///////////////////////////////////////////////////////////////////////////////////////////////////
        const attEs = data['stats']['3']['base_stat'];

        const percentAttEs = Math.trunc((attEs * 100) / 180);

        attEsBar.style.width = percentAttEs + "%";
        document.getElementById("statAttEs").innerHTML = attEs;
        document.getElementById("percentAttEs").innerHTML = percentAttEs + "%";
        ///////////////////////////////////////////////////////////////////////////////////////////////////
        const attEsEf = data['stats']['3']['effort'];;

        const percentAttEsEffort = Math.trunc((attEsEf * 100) / 4);

        if (attEsEf == 0) {
            attEsBarEffort.style.width = "50px";
            attEsBarEffort.style.backgroundColor = "gray"
            document.getElementById("percentAttEsEffort").style.color = "gray";
            document.getElementById("statAttEsEffort").innerHTML = attEsEf;
            document.getElementById("percentAttEsEffort").innerHTML = percentAttEsEffort + "%";
        } else {
            attEsBarEffort.style.backgroundColor = "#ED2590"
            document.getElementById("percentAttEsEffort").style.color = "#ED2590";
            attEsBarEffort.style.width = percentAttEsEffort + "%";
            document.getElementById("statAttEsEffort").innerHTML = attEsEf;
            document.getElementById("percentAttEsEffort").innerHTML = percentAttEsEffort + "%";
        }
        ///////////////////////////////////////////////////////////////////////////////////////////////////
        const defEs = data['stats']['4']['base_stat'];

        const percentDefEs = Math.trunc((defEs * 100) / 230);

        defEsBar.style.width = percentDefEs + "%";
        document.getElementById("statDefEs").innerHTML = defEs;
        document.getElementById("percentDefEs").innerHTML = percentDefEs + "%";
        ///////////////////////////////////////////////////////////////////////////////////////////////////
        const defEsEf = data['stats']['4']['effort'];;

        const percentDefEsEffort = Math.trunc((defEsEf * 100) / 4);

        if (defEsEf == 0) {
            defEsBarEffort.style.width = "50px";
            defEsBarEffort.style.backgroundColor = "gray"
            document.getElementById("percentDefEsEffort").style.color = "gray";
            document.getElementById("statDefEsEffort").innerHTML = defEsEf;
            document.getElementById("percentDefEsEffort").innerHTML = percentDefEsEffort + "%";
        } else {
            defEsBarEffort.style.backgroundColor = "#ED2590"
            document.getElementById("percentDefEsEffort").style.color = "#ED2590";
            defEsBarEffort.style.width = percentDefEsEffort + "%";
            document.getElementById("statDefEsEffort").innerHTML = defEsEf;
            document.getElementById("percentDefEsEffort").innerHTML = percentDefEsEffort + "%";
        }
        ///////////////////////////////////////////////////////////////////////////////////////////////////
        const speed = data['stats']['5']['base_stat'];

        const percentSpeed = Math.trunc((speed * 100) / 160);

        speedBar.style.width = percentSpeed + "%";
        document.getElementById("statSpeed").innerHTML = speed;
        document.getElementById("percentSpeed").innerHTML = percentSpeed + "%";
        ///////////////////////////////////////////////////////////////////////////////////////////////////
        const speedEf = data['stats']['5']['effort'];;

        const percentSpeedEffort = Math.trunc((speedEf * 100) / 4);

        if (speedEf == 0) {
            speedBarEffort.style.width = "50px";
            speedBarEffort.style.backgroundColor = "gray"
            document.getElementById("percentSpeedEffort").style.color = "gray";
            document.getElementById("statSpeedEffort").innerHTML = speedEf;
            document.getElementById("percentSpeedEffort").innerHTML = percentSpeedEffort + "%";
        } else {
            speedBarEffort.style.backgroundColor = "#ED2590"
            document.getElementById("percentSpeedEffort").style.color = "#ED2590";
            speedBarEffort.style.width = percentSpeedEffort + "%";
            document.getElementById("statSpeedEffort").innerHTML = speedEf;
            document.getElementById("percentSpeedEffort").innerHTML = percentSpeedEffort + "%";
        }
        ///////////////////////////////////////////////////////////////////////////////////////////////////


        input.value = '';
        loadAndRenderAllPokemon();

    } else {
        alert("Pokémon não encontrado, digite um nome ou id válido por favor.");
    }
}
renderPokemon(localStorage.getItem('chosen'));

let allPokemon = []; 
let displayedCount = 4;

async function fetchPokemonList(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function renderPokemonList(pokemonList) {
    const pokemonContainer = document.getElementById('pokemon-container');
    pokemonContainer.innerHTML = ''; 

    for (let pokemon of pokemonList) {
        const pokemonData = await fetchPokemonList(pokemon.url); 
        const pokemonItem = document.createElement('div');
        pokemonItem.className = 'pokemon-item';
        pokemonItem.innerHTML = `
            <h3 style="opacity: 30%">${pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}</h3>
            <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">`;
        pokemonItem.addEventListener('click', () => renderPokemon(pokemonData.name));
        pokemonContainer.appendChild(pokemonItem);
    }
}

async function loadAndRenderAllPokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'; 

    try {
        const data = await fetchPokemonList(url);
        allPokemon = data.results; 
        renderPokemonList(allPokemon); 
    } catch (error) {
        console.error('Erro ao buscar Pokémon:', error);
    }
}

function filterPokemon(event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredPokemon = allPokemon.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchTerm)
    );
    renderPokemonList(filteredPokemon);
}

input.addEventListener('input', filterPokemon);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    renderPokemon(input.value.toLowerCase());
    input.value = '';
})

const x = matchMedia('(max-width: 830px)');

seeMoreButton1.addEventListener ('click', () =>{
    document.getElementById('friends').style.height = "720px";
    document.getElementById('friendsDiv').style.height = "800px";
    seeMoreButton1.style.display = "none";
    seeLessButton.style.display = "block";
    secctionFriend.style.overflowY = "scroll";
    secctionFriend.style.overflowX = "hidden";

})
seeLessButton.addEventListener ('click', () =>{
    document.getElementById('friends').style.height = "442px";
    document.getElementById('friendsDiv').style.height = "442px";
    seeMoreButton1.style.display = "block";
    seeLessButton.style.display = "none";
})
///////////////////////////////////////////////////////////////////////////////////////
const greeting = document.getElementById('greetings');

function hi() {
    let date = new Date();
    if (5 <= date.getHours() && date.getHours() <= 11) {
        greeting.innerHTML = "Bom dia,"
    } else if (12 <= date.getHours() && date.getHours() <= 18) {
        greeting.innerHTML = "Boa tarde,"
    } else {
        greeting.innerHTML = "Boa noite,"
    }
}
hi();