import { useState } from "react";
import pokemonLogo from "./assets/pokemon-23.svg";
import "./App.css";
import Pokemon from "./components/Pokemon";
import SelectInput from "./components/SelectInput";
import Card from "./components/Card";
import SliderInput from "./components/Slider";
import { pokemons, typeOptions } from "./data/pokemons";

const minAttack = Math.min(...pokemons.map((pokemon) => pokemon.attack));
const maxAttack = Math.max(...pokemons.map((pokemon) => pokemon.attack));

const minHp = Math.min(...pokemons.map((pokemon) => pokemon.hp));
const maxHp = Math.max(...pokemons.map((pokemon) => pokemon.hp));

// Sprite image URL pattern:
// `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

function App() {
  const [selectedPokemonType, setSelectedPokemonType] = useState(
    typeOptions[0],
  );
  // À chaque changement de selectedPokemonType (state), React re-exécute entièrement la fonction App()
  // C'est pour ca qu'on peut utiliser un const pour filteredPokemonsBasedOnType, qui sera recalculé à chaque changement de selectedPokemonType
  const filteredPokemonsBasedOnType = pokemons.filter(
    (pokemon) => pokemon.type === selectedPokemonType.value,
  );

  const [selectedMinimalAttack, setSelectedMinimalAttack] = useState(10);
  const [selectedMinimalHp, setSelectedMinimalHp] = useState(10);

  const pokemonsOpacityBasedOnAttack = filteredPokemonsBasedOnType.map(
    (pokemon) => {
      pokemon.opacity =
        pokemon.attack >= selectedMinimalAttack &&
        pokemon.hp >= selectedMinimalHp
          ? 1
          : 0.3;
      return pokemon;
    },
  );

  const nPokemonsWithOpacity1 = pokemonsOpacityBasedOnAttack.filter(
    (pokemon) => pokemon.opacity === 1,
  ).length;

  console.log("pokemonsOpacityBasedOnAttack:", pokemonsOpacityBasedOnAttack);

  return (
    <div className="app-container">
      <div className="app-header">
        <img src={pokemonLogo} alt="Pokemon Logo" className="app-logo" />
        <h1 className="app-title">Pokemon Explorer</h1>
      </div>
      <h4 className="app-type-label"> Choose a Pokemon type: </h4>
      <SelectInput
        options={typeOptions}
        value={selectedPokemonType}
        onChange={setSelectedPokemonType}
      />
      <div className="sliders-container">
        <SliderInput
          title="Select a minimal attack capacity"
          value={selectedMinimalAttack}
          onChange={setSelectedMinimalAttack}
          minimum={minAttack}
          maximum={maxAttack}
        />
        <SliderInput
          title="Select a minimal hp"
          value={selectedMinimalHp}
          onChange={setSelectedMinimalHp}
          minimum={minHp}
          maximum={maxHp}
        />
      </div>
      <h4 className="results-count">
        {nPokemonsWithOpacity1} pokemons match your criteria
      </h4>
      <div className="pokemon-grid">
        {filteredPokemonsBasedOnType.map((pokemon) => (
          <div key={pokemon.id}>
            <Card opacity={pokemon.opacity}>
              <Pokemon pokemon={pokemon} />
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
