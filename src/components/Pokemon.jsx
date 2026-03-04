const Pokemon = ({ pokemon }) => {
  const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
  return (
    <div>
      <img src={src} alt={pokemon.name} width="200" height="200"></img>
      <p> <b> {pokemon.name} </b></p>
      <p> Attack : {pokemon.attack} </p>
      <p> Hp : {pokemon.hp} </p>
    </div>
  );
};

export default Pokemon;
