import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function SliderInput({ title, value, onChange, minimum, maximum }) {
  return (
    <Box sx={{ width: 300, margin: "0 auto" }}>
      <h4 style={{ textAlign: "center" }}> {title} </h4>
      <Slider
        size="small"
        value={value}
        step={10}
        marks
        min={minimum}
        max={maximum}
        aria-label="Small"
        valueLabelDisplay="auto"
        onChange={(_e, newValue) => onChange(newValue)}
      />
    </Box>
  );
}
