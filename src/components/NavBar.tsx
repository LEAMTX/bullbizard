import { useState } from "react";

//Ce composant sera responsable de l'affichage des boutons "précédent" et "suivant".
interface Pokemon {
  name: string;
  imgSrc?: string;
  id: number;
}

interface NavBarProps {
  pokemonIndex: number;
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}
//importer usestate en haut
//function Bouton({ pokemonIndex, setPokemonIndex, pokemonList }: NavBarProps) {
//sert à récuperer de app les fponctions
const NavBar = ({ setPokemonIndex, pokemonList }: NavBarProps) => {
  return (
    <section>
      {pokemonList.map(
        (
          pokemon, //chauqe element du tableau du me l'affiche  à travers
        ) => (
          //le composant avatr, et tu envois chaque element avec les infos du tableau
          //set pokemon index permet de changer l'état de pokemonindex qui est défini dans le composant principal app.
          <button
            type="button"
            onClick={() => setPokemonIndex(pokemon.id)}
            key={pokemon.id}
          >
            {pokemon.name}
          </button>
        ),
      )}
    </section>
  );
};
export default NavBar;

/* /* {pokemonIndex < pokemonList.length - 1 && (
        <button type="button" onClick={() => setPokemonIndex(pokemonIndex + 1)}>
          {pokemonIndex} 🍩 suivant loulou
        </button>
      )}

      {pokemonIndex > 0 && (
        <button type="button" onClick={() => setPokemonIndex(pokemonIndex - 1)}>
          {pokemonIndex} 🍩 précédent louloute
        </button>
      )} */
