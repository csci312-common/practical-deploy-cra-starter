import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

function LabeledSlider(props) {
  const { label, value, setValue } = props;
  return (
    <div>
      <div className="color-label">{label}:</div>
      <input
        type="range"
        min="0"
        max="255"
        step="1"
        value={value}
        onChange={event => setValue(parseInt(event.target.value, 10))}
      />
      <span>{value}</span>
    </div>
  );
}

LabeledSlider.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired,
};


function ColorPicker() {
  // Each color component is independent and so is a distinct piece of state
  const [red, setRed] = React.useState(0);
  const [green, setGreen] = React.useState(0);
  const [blue, setBlue] = React.useState(0);
  
  const color = {
    background: `rgb(${red},${green},${blue})`
  };
  return (
    <div>
      <div id="color" className="color-swatch" style={color} />
      <LabeledSlider
        label="Red"
        value={red}
        setValue={value => setRed(value)}
      />
      <LabeledSlider
        label="Green"
        value={green}
        setValue={value => setGreen(value)}
      />
      <LabeledSlider
        label="Blue"
        value={blue}
        setValue={value => setBlue(value)}
      />
    </div>
  );
}

export { ColorPicker };

function App() {
  return (<ColorPicker />);
}

export default App;
