


document.addEventListener("DOMContentLoaded", () => {
  const pokedex = document.getElementById("pokedex");
  const start = document.getElementById("starter");
  const secondbox = document.getElementById("secondbox");
  const thirdbox = document.getElementById("thirdbox");
  const fourthbox = document.getElementById("fourthbox");
  const fifthbox = document.getElementById("fifthbox");
  const sixthbox = document.getElementById("sixthbox");
// const practice
  // COULD USE GETELEMENTBYCLASS THEN EACH BUTTON DOES SAME

  let previousNumbers = [];

  const fetchPokemon = () => {
   
   
      const url = `https://pokeapi.co/api/v2/pokemon/2/`;
      return fetch(url).then((res) => res.json());
    
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


  start.addEventListener("click", () => {

    // STORES NUMBERS
    const numbers = [155, 158, 152];

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
  secondbox.addEventListener("click", () => {

    // VARIALBE FOR RANDOMIZATION
    const randomIndex = Math.floor(Math.random() * (248 - 201 + 1) + 201);

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

  thirdbox.addEventListener("click", () => {

    // VARIALBE FOR RANDOMIZATION
    const randomIndex = Math.floor(Math.random() * (248 - 201 + 1) + 201);

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
        const thirdpoke = document.getElementById("thirdpoke");
        thirdpoke.textContent = ` ${randomPokemon.name}`;

        const secondsprite = document.getElementById("secondsprite");
        thirdsprite.src = randomPokemon.sprite;
        thirdsprite.alt = randomPokemon.name;

        thirdpoke.style.display = "inline";
        thirdsprite.style.display = "inline";
      });
  });

  fourthbox.addEventListener("click", () => {

    // VARIALBE FOR RANDOMIZATION
    const randomIndex = Math.floor(Math.random() * (248 - 201 + 1) + 201);

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
        const fourthpoke = document.getElementById("fourthpoke");
        fourthpoke.textContent = ` ${randomPokemon.name}`;

        const fourthsprite = document.getElementById("fourthsprite");
        fourthsprite.src = randomPokemon.sprite;
        fourthsprite.alt = randomPokemon.name;

        fourthpoke.style.display = "inline";
        fourthsprite.style.display = "inline";
      });
  });

  fifthbox.addEventListener("click", () => {

    // VARIALBE FOR RANDOMIZATION
    const randomIndex = Math.floor(Math.random() * (248 - 201 + 1) + 201);

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
        const fifthpoke = document.getElementById("fifthpoke");
        fifthpoke.textContent = ` ${randomPokemon.name}`;

        const fifthsprite = document.getElementById("fifthsprite");
        fifthsprite.src = randomPokemon.sprite;
        fifthsprite.alt = randomPokemon.name;

        fifthpoke.style.display = "inline";
        fifthsprite.style.display = "inline";
      });
  });

  sixthbox.addEventListener("click", () => {

    // VARIALBE FOR RANDOMIZATION
    const randomIndex = Math.floor(Math.random() * (248 - 201 + 1) + 201);
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
        const sixthpoke = document.getElementById("sixthpoke");
        sixthpoke.textContent = ` ${randomPokemon.name}`;

        const sixthsprite = document.getElementById("sixthsprite");
        sixthsprite.src = randomPokemon.sprite;
        sixthsprite.alt = randomPokemon.name;

        sixthpoke.style.display = "inline";
        sixthsprite.style.display = "inline";
      });
  });















});





