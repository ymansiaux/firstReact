import { useState } from 'react';
import Select from 'react-select';


const SelectInput = (props) => {
//   const [selectedPokemonType, setSelected] = useState(options[0]);
// console.log("selectedPokemonType:", selectedPokemonType.value);

  return (
    <Select
      options={props.options}
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default SelectInput;