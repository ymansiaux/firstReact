import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function SliderInput(props) {

  return (
    <Box sx={{ width: 300, margin: "0 auto" }}>
    <h4 style={{ textAlign: "center" }}> {props.title} </h4>
      <Slider
        size="small"
        value={props.value}
        step={10} marks min={props.minimum} max={props.maximum}
        aria-label="Small"
        valueLabelDisplay="auto"
        onChange={(_e, newValue) => props.onChange(newValue)}
      />      
    </Box>
  );
}