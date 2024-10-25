import "./App.css";
import PokemonCard from "./components/PokemonCard";

import MyTitle from "./MyTitle";

const pokemonList = [
  {
    name: "bulbasaur", //={pokemon.name}
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png", //=pokemon.imgSrc} pour appeler cet élément
  },
  {
    name: "mew",
  },
];

function App() {
  return (
    <div>
      <PokemonCard pokemon={pokemonList[0]} />
      <MyTitle />
    </div>
  );
}

export default App;
