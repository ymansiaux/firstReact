import { useState } from 'react'
import pokemonLogo from './assets/pokemon-23.svg'
import './App.css'
import Pokemon from "./Pokemon";
import SelectInput from "./SelectInput";
import Card from "./Card";
import SliderInput from "./Slider";

const pokemons = [
  { id: 1, name: "Bulbasaur", type: "Grass", hp: 45, attack: 49 },
  { id: 4, name: "Charmander", type: "Fire", hp: 39, attack: 52 },
  { id: 7, name: "Squirtle", type: "Water", hp: 44, attack: 48 },
  { id: 25, name: "Pikachu", type: "Electric", hp: 35, attack: 55 },
  { id: 6, name: "Charizard", type: "Fire", hp: 78, attack: 84 },
  { id: 9, name: "Blastoise", type: "Water", hp: 79, attack: 83 },
  { id: 3, name: "Venusaur", type: "Grass", hp: 80, attack: 82 },
  { id: 150, name: "Mewtwo", type: "Psychic", hp: 106, attack: 110 },
  { id: 39, name: "Jigglypuff", type: "Normal", hp: 115, attack: 45 },
  { id: 143, name: "Snorlax", type: "Normal", hp: 160, attack: 110 },
  { id: 94, name: "Gengar", type: "Ghost", hp: 60, attack: 65 },
  { id: 131, name: "Lapras", type: "Water", hp: 130, attack: 85 },
  { id: 133, name: "Eevee", type: "Normal", hp: 55, attack: 55 },
  { id: 149, name: "Dragonite", type: "Dragon", hp: 91, attack: 134 },
  { id: 59, name: "Arcanine", type: "Fire", hp: 90, attack: 110 },
  { id: 65, name: "Alakazam", type: "Psychic", hp: 55, attack: 50 },
  { id: 68, name: "Machamp", type: "Fighting", hp: 90, attack: 130 },
  { id: 76, name: "Golem", type: "Rock", hp: 80, attack: 120 },
  { id: 130, name: "Gyarados", type: "Water", hp: 95, attack: 125 },
  { id: 148, name: "Dragonair", type: "Dragon", hp: 61, attack: 84 },
];

const minAttack = Math.min(pokemons.map((pokemon) => pokemon.attack));
const maxAttack = Math.max(pokemons.map((pokemon) => pokemon.attack));

const minHp = Math.min(pokemons.map((pokemon) => pokemon.hp));
const maxHp = Math.max(pokemons.map((pokemon) => pokemon.hp));


const options = [
  { value: 'Grass', label: 'Grass' },
  { value: 'Fire', label: 'Fire' },
  { value: 'Water', label: 'Water' },
  { value: 'Psychic', label: 'Psychic' },
  { value: 'Electric', label: 'Electric' },
  { value: 'Normal', label: 'Normal' },
  { value: 'Ghost', label: 'Ghost' },
  { value: 'Dragon', label: 'Dragon' },
  { value: 'Fighting', label: 'Fighting' },
  { value: 'Rock', label: 'Rock' },
];


// Sprite image URL pattern:
// `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

function App() {

const [selectedPokemonType, setSelectedPokemonType] = useState(options[0]);
// À chaque changement de selectedPokemonType (state), React re-exécute entièrement la fonction App()
// C'est pour ca qu'on peut utiliser un const pour filteredPokemonsBasedOnType, qui sera recalculé à chaque changement de selectedPokemonType
const filteredPokemonsBasedOnType = pokemons.filter((pokemon) => pokemon.type === selectedPokemonType.value);

const [selectedMinimalAttack, setSelectedMinimalAttack] = useState(10);
const [selectedMinimalHp, setSelectedMinimalHp] = useState(10);

const pokemonsOpacityBasedOnAttack = filteredPokemonsBasedOnType.map((pokemon) => {
  pokemon.opacity = (pokemon.attack >= selectedMinimalAttack && pokemon.hp >= selectedMinimalHp) ? 1 : 0.3
  return pokemon
});

const nPokemonsWithOpacity1 = pokemonsOpacityBasedOnAttack.filter((pokemon) => pokemon.opacity === 1).length;

console.log("pokemonsOpacityBasedOnAttack:", pokemonsOpacityBasedOnAttack);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#dce8f8", padding: 16 }}>
      <div style={{ textAlign: "center", marginBottom: 16 }}>
        <img src={pokemonLogo} alt="Pokemon Logo" style={{ height: 80 }} />
        <h1 style={{ fontFamily: "serif", letterSpacing: 2 }}>Pokemon Explorer</h1>
      </div>
      <h4 style={{ textAlign: "center" }}> Choose a Pokemon type: </h4>
    <SelectInput options={options} value={selectedPokemonType} onChange={setSelectedPokemonType} />
    <div style={{ display: "flex", justifyContent: "center", gap: 32 }}>
      <SliderInput title = "Select a minimal attack capacity" value={selectedMinimalAttack} onChange={setSelectedMinimalAttack} min={minAttack} max={maxAttack}/>
      <SliderInput title = "Select a minimal hp" value={selectedMinimalHp} onChange={setSelectedMinimalHp} min={minHp} max={maxHp}/>
    </div>
      <h4 style={{ textAlign: "center", marginTop: 32 }}> {nPokemonsWithOpacity1} pokemons match your criteria </h4>
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", gap: 12 }}>
    {filteredPokemonsBasedOnType.map((pokemon, id) => (
    <div>
      <Card opacity={pokemon.opacity}>
      <Pokemon
      key={id}
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
      name= {pokemon.name}
      alt={pokemon.name}
      attack={pokemon.attack}
      hp={pokemon.hp}
      />
      </Card>
    </div>
    ))}
    </div>
  </div>
  );
}

export default App
