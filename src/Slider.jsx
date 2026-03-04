import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function SliderInput(props) {

//  const handleChange = (event: Event, newValue: number) => {
//     setValue(newValue);
//   };

  return (
    <Box sx={{ width: 300, margin: "0 auto" }}>
    <h4 style={{ textAlign: "center" }}> {props.title} </h4>
      <Slider
        size="small"
        defaultValue={props.value}
        step={10} marks min={10} max={110}
        aria-label="Small"
        valueLabelDisplay="auto"        
        onChange={props.onChange}
      />      
    </Box>
  );
}