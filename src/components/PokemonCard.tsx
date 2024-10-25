//props
interface PokemonProps {
  //on définit l'object pokemon;
  pokemon: {
    imgSrc: string;
    name: string;
  };
}
// Dans le fichier PokemonCard.tsx, crée un composant React appelé PokemonCard. Ce composant doit contenir une balise <figure>.
// const pokemonList = [
//   {
//     name: "bulbasaur", //={pokemon.name}
//     imgSrc:
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png", //=pokemon.imgSrc} pour appeler cet élément
//   },
//   {
//     name: "mew",
//   },
// ];
// const pokemon = { name: "mew", imgSrc: null };
//const pokemon = pokemonList[1]; //on prend le premier pokemon de ma liste

function PokemonCard({ pokemon }: PokemonProps) {
  //À l'intérieur de la fonction PokemonCard, crée une variable appelée pokemon : affecte-lui le premier Pokémon du tableau pokemonList.
  //appelle le nom de chq pokemon du tableau object.clef :<figcaption> {pokemon.name} </figcaption>
  // <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Bulbasaur" />
  //remplacé par <img  src={pokemon.imgSrc} alt={pokemon.name} />
  return (
    <figure>
      {pokemon.imgSrc !== undefined ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>"???"</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}
//quête 3:
//Modifie ton code pour afficher l'image du Pokémon seulement si pokemon.imgSrc est défini. Si l'image est disponible, utilise une balise <img> pour l'afficher. Sinon, affiche un paragraphe <p> avec "???" en texte.
//Utilise l'opérateur ternaire ?: pour cela.

//exemple de ternaire si weater === sunny; alors soleil sinon pluie :return <p>{weather === "sunny" ? "☀️" : "☁️"}</p>
//{pokemon.imgSrc !== undefined ? <img>{pokemon.imgSrc}</img> : <p>"???"</p>}
//{pokemon.imgSrc !== undefined ? (<img  src={pokemon.imgSrc} alt={pokemon.name} />) : (<p>"???"</p>)} // cette ligne est du ternaire et veut dire: si image source est definie alors affiches image avec son src et son alt, sinon affiche un paragraphe avec "???"
export default PokemonCard;

//quête 4: Dans ton composant PokemonCard, ajoute un paramètre props à la fonction PokemonCard. Ensuite, utilise console.log(props) à l'intérieur de la fonction pour afficher l'objet props dans la console de ton navigateur.
//À ce stade, tu devrais voir dans la console un objet vide.
