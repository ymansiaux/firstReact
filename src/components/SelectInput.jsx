import Select from "react-select";

const SelectInput = ({ options, value, onChange }) => {
  return (
    <Select
      options={options}
      value={value}
      onChange={onChange}
    />
  );
};

export default SelectInput;
