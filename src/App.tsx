import "./App.css";
import PokemonCard from "./components/PokemonCard";
//1)importer  dans avatar mon usestate
import { useState } from "react";
import MyTitle from "./MyTitle";
//reimporter les boutons dans app ;
import NavBar from "./components/NavBar";

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
  //use state initialisé à zéro index 0, ou 1 le suivant, on veut que les boutons nous aides à naviguer dans l'index
  const [pokemonIndex, setPokemonIndex] = useState(0); // je la laisse dans le parent car c'est le parent app qui communique loes caractéristiques aux enfants.

  ////compteur de clicks
  //pokemon={pokemonList[pokemonIndex] permet de changer l'index grâce aux boutons en selectionnant tous les index du tableau de pokemon
  // toujours mettre button de type="button" sur un boutton
  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <MyTitle />
      <NavBar
        pokemonIndex={pokemonIndex}
        setPokemonIndex={setPokemonIndex}
        pokemonList={pokemonList} //pokemon list reponds pokemon directement et lui dit quel index mettre
      />
    </div>
  );
}

export default App;
