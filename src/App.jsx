import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pokemon from "./Pokemon";
import SelectInput from "./SelectInput";
import Card from "./Card";
import SliderInput from "./Slider";

import * as d3 from "d3";

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

  return (
    <div>
      <h4 style={{ textAlign: "center" }}> Choose a Pokemon type: </h4>
    <SelectInput options={options} value={selectedPokemonType} onChange={setSelectedPokemonType} />
    {/* {console.log("selectedPokemonType:", selectedPokemonType.value)} */}    
    <SliderInput title = "Select a minimal attack capacity" value={selectedMinimalAttack} onChange={setSelectedMinimalAttack}/>
    {console.log("selectedMinimalAttack:", selectedMinimalAttack)}
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
    {filteredPokemonsBasedOnType.map((pokemon, id) => (
    <div>
      <Card opacity={"100%"}>
      <Pokemon
      key={id}
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
      name= {pokemon.name}
      alt={pokemon.name}
      />
      </Card>
      {/* {console.log(pokemons)} */}
    </div>
    ))}
    </div>
  </div>
  );
}

export default App
