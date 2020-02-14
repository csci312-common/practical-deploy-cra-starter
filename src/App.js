import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ColorLabel = styled.div`
display: inline-block;
width: 50px;
text-align: left;
`;

function LabeledSlider(props) {
  const { label, value, setValue } = props;
  return (
    <div>
      <ColorLabel>{label}:</ColorLabel>
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

const ColorSwatch = styled.div`
width: 100px;
height: 100px;
border: 1px solid black;
background: ${(props) => `rgb(${props.red},${props.green},${props.blue})`};
`;


function ColorPicker() {
  // Each color component is independent and so is a distinct piece of state
  const [red, setRed] = React.useState(0);
  const [green, setGreen] = React.useState(0);
  const [blue, setBlue] = React.useState(0);
  
  return (
    <div>
      <ColorSwatch red={red} green={green} blue={blue} />
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

export { ColorPicker, ColorSwatch };

function App() {
  return (<ColorPicker />);
}

export default App;
