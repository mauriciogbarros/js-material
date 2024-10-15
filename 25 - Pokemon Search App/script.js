const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const pokemonImgDiv = document.getElementById("img-div");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonWeight = document.getElementById("weight");
const pokemonHeight = document.getElementById("height");
const pokemonTypes = document.getElementById("types");
const pokemonHP = document.getElementById("hp");
const pokemonAttack = document.getElementById("attack");
const pokemonDefense = document.getElementById("defense");
const pokemonSpecialAttack = document.getElementById("special-attack");
const pokemonSpecialDefense = document.getElementById("special-defense");
const pokemonSpeed = document.getElementById("speed");

const pokeAPIproxy = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";

const validateSearch = () => {
  return searchInput.length != 0 &&
    searchInput.value != "" &&
    searchInput.value != "Red";
}

const reset = () => {
  pokemonImgDiv.innerHTML = "";
  pokemonName.textContent = "";
  pokemonId.textContent = "";
  pokemonWeight.textContent = "";
  pokemonHeight.textContent = "";
  pokemonTypes.textContent = "";
  pokemonHP.textContent = "";
  pokemonAttack.textContent = "";
  pokemonDefense.textContent = "";
  pokemonSpecialAttack.textContent = "";
  pokemonSpecialDefense.textContent = "";
  pokemonSpeed.textContent = "";
}

const fetchPokemon = async (pokemon) => {
  reset();
  try {
    const request = pokemon.toLowerCase();
    const pokemonData = await fetch(pokeAPIproxy + `/${request}`)
      .then((response) => response.json());
    const {
      name,
      id,
      weight,
      height,
      types,
      stats: stats,
      sprites: sprites
    } = pokemonData;

    const hp = stats[0].base_stat;
    const attack = stats[1].base_stat;
    const defense = stats[2].base_stat;
    const specialAttack = stats[3].base_stat;
    const specialDefense = stats[4].base_stat;
    const speed = stats[5].base_stat;

    const sprite = sprites.front_default;

    pokemonImgDiv.innerHTML = `
      <img id="sprite" src=${sprite} />
    `
    pokemonName.textContent = name.toUpperCase();
    pokemonId.textContent = id;
    pokemonWeight.textContent = weight;
    pokemonHeight.textContent = height;
    types.forEach((type) => {
      pokemonTypes.innerHTML += `<p>${type.type.name.toUpperCase()}</p>`;
    });
    pokemonHP.textContent = hp;
    pokemonAttack.textContent = attack;
    pokemonDefense.textContent = defense;
    pokemonSpecialAttack.textContent = specialAttack;
    pokemonSpecialDefense.textContent = specialDefense;
    pokemonSpeed.textContent = speed;
  } catch(err) {
    alert("Pokémon not found");
    console.error(err);
  }
}

searchButton.addEventListener("click", () => {
  fetchPokemon(searchInput.value);
});