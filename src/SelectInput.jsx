import Select from 'react-select';

const SelectInput = (props) => {

  return (
    <Select
      options={props.options}
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default SelectInput;