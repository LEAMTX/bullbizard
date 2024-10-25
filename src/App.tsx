import "./App.css";
import PokemonCard from "./components/PokemonCard";
//1)importer  dans avatar mon usestate
import { useState } from "react";
import MyTitle from "./MyTitle";

const pokemonList = [
  {
    name: "bulbasaur", //(pokemon.name)
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  //2) declarer la const pour mon bouton : permet dembarquer des information dans mon composant, garder en memoire la variable pokedex, et l'initiliser à 0
  const [pokemonIndex, setPokedex] = useState(0);

  ////compteur de clicks
  //pokemon={pokemonList[pokemonIndex] permet de changer l'index grâce aux boutons en selectionnant tous les index du tableau de pokemon
  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <MyTitle />
      {pokemonIndex < pokemonList.length - 1 && (
        <button type="button" onClick={() => setPokedex(pokemonIndex + 1)}>
          {pokemonIndex} 🍩 suivant loulou
        </button>
      )}

      {pokemonIndex > 0 && (
        <button type="button" onClick={() => setPokedex(pokemonIndex - 1)}>
          {pokemonIndex} 🍩 précédent louloute
        </button>
      )}
    </div>
  );
}

export default App;
