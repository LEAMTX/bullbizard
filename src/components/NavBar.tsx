import { useState } from "react";

//Ce composant sera responsable de l'affichage des boutons "précédent" et "suivant".
interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  pokemonIndex: number;
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}
//importer usestate en haut
function Bouton({ pokemonIndex, setPokemonIndex, pokemonList }: NavBarProps) {
  return (
    <section>
      {pokemonIndex < pokemonList.length - 1 && (
        <button type="button" onClick={() => setPokemonIndex(pokemonIndex + 1)}>
          {pokemonIndex} 🍩 suivant loulou
        </button>
      )}

      {pokemonIndex > 0 && (
        <button type="button" onClick={() => setPokemonIndex(pokemonIndex - 1)}>
          {pokemonIndex} 🍩 précédent louloute
        </button>
      )}
    </section>
  );
}
export default Bouton;
