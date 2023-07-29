


document.addEventListener("DOMContentLoaded", () => {
    const pokedex = document.getElementById("pokedex");
    const start = document.getElementById("starter");
    const secondbox = document.getElementById("secondbox");
    const thirdbox = document.getElementById("thirdbox");
    const fourthbox = document.getElementById("fourthbox");
    const fifthbox = document.getElementById("fifthbox");
    const sixthbox = document.getElementById("sixthbox");


    let previousNumbers = [];

const fetchPokemon = () => {
    const promises = [];
    for( let i = 495; i <= 646; i++ ){
   const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((res) => res.json()))
    }
        Promise.all(promises).then((results) => {
           const pokemon = results.map((data) => ({
                name: data.name,
                id: data.id,
                sprite: data.sprites["front_default"],
            }));
            displayPokemon(pokemon);
        });
    }
   
          const displayPokemon = (pokemon) => {
           
           const html = null;
           pokedex.innerHTML = html;
            
        };

        


      fetchPokemon();
    
    
      start.addEventListener("click", () =>{
       
        // STORES NUMBERS
        const numbers = [495, 498, 501];

        const availableNumbers = numbers.filter((num) => num !== previousNumbers);

        if (availableNumbers.length === 0) {
            previousNumbers = [];
            previousPokemonId = null; // Reset previousPokemonId
            
          }
        // VARIALBE FOR RANDOMIZATION
        const randomIndex = Math.floor(Math.random() * availableNumbers.length)
        // GENERATORES THE RANDOM POKEMON BAED ON ID
        const randomPokemonId = availableNumbers[randomIndex];
       
        fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`)
        .then((res) => res.json())
        .then((data) => {
          const randomPokemon = {
            name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
            id: data.id,
        sprite: data.sprites["front_default"],
          };
          
          pokedex.style.display = "block";

          // TO DISPLAY POKEMON IN BOX
        const starterPokemon = document.getElementById("starterPokemon");
        starterPokemon.textContent = ` ${randomPokemon.name}`;

        const starterSprite = document.getElementById("starterSprite");
        starterSprite.src = randomPokemon.sprite;
        starterSprite.alt = randomPokemon.name;
        
        starterPokemon.style.display = "inline";
        starterSprite.style.display = "inline";


          previousNumbers = randomPokemonId;
        });
        
    });
    secondbox.addEventListener("click", () =>{

        // VARIALBE FOR RANDOMIZATION
        const randomIndex  = Math.floor(Math.random() * (637 - 504 + 1) + 504);
       
        fetch(`https://pokeapi.co/api/v2/pokemon/${randomIndex}`)
        .then((res) => res.json())
        .then((data) => {
          const randomPokemon = {
            name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
            id: data.id,
        sprite: data.sprites["front_default"],
          };
          
          pokedex.style.display = "block";

          // TO DISPLAY POKEMON IN BOX
        const secondpoke = document.getElementById("secondpoke");
        secondpoke.textContent = ` ${randomPokemon.name}`;

        const secondsprite = document.getElementById("secondsprite");
        secondsprite.src = randomPokemon.sprite;
        secondsprite.alt = randomPokemon.name;
        
        secondpoke.style.display = "inline";
        secondsprite.style.display = "inline";


         
        });
        
    });
    
  });





