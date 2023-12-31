document.addEventListener("DOMContentLoaded", () => {
    const pokedex = document.getElementById("pokedex");
    console.log(pokedex);

    const fetchPokemon = () => {
      const url = `https://pokeapi.co/api/v2/generation/2/`;
    
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          const pokemon = data.pokemon_species.map((species) => ({
            name: species.name,
            id: species.url.split('/')[6], // Extracting the ID from the URL
          }));
          return Promise.all(
            pokemon.map((poke) => fetch(`https://pokeapi.co/api/v2/pokemon/${poke.id}/`))
          );
        })
        .then((responses) => Promise.all(responses.map((res) => res.json())))
        .then((pokemonData) => {
          const formattedPokemonData = pokemonData.map((data) => ({
            name: data.name,
            id: data.id,
            sprite: data.sprites.front_default,
            hp: data.stats[0].base_stat,
            Attack: data.stats[1].base_stat,
            Defense: data.stats[2].base_stat,
            SpAtk: data.stats[3].base_stat,
            SpDef: data.stats[4].base_stat,
            Speed: data.stats[5].base_stat,
            type: data.types.map((type) => type.type.name).join(', '),
          }));
          displayPokemon(formattedPokemonData);
        });
    };
    
    const displayPokemon = (pokemon) => {
  
     console.log(pokemon);
     const pokemonHTMLString = pokemon.map(pokeman =>`
        <li class="card">
            <img class="card-image" src="${pokeman.sprite}"/>
            <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
            <p class="card-title">Type: ${pokeman.type}</p>
            <p class="card-title">HP: ${pokeman.hp}</p>
            <p class="card-title">Attack: ${pokeman.Attack}</p>
            <p class="card-title">Defense: ${pokeman.Defense}</p>
            <p class="card-title">Sp. Atk: ${pokeman.SpAtk}</p>
            <p class="card-title">Sp. Def: ${pokeman.SpDef}</p>
            <p class="card-title">Speed: ${pokeman.Speed}</p>

        </li>
        `)
        .join('')
     pokedex.innerHTML = pokemonHTMLString;
 
    };
    fetchPokemon();
   
});