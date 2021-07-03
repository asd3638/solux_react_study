import React from 'react'

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil</p>
    } else {
        return <p>The water would not boil</p>
    }
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: "",
            scale: "c"
        };
        this.handleCelChange = this.handleCelChange.bind(this);
        this.handleFahChange = this.handleFahChange.bind(this);
    }
    handleCelChange(temperature) {
        this.setState({
            scale: "c",
            temperature
        })
    }
    handleFahChange(temperature) {
        this.setState({
            scale: "f",
            temperature
        })
    }
    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const cel = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
        const fah = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
        return (
            <div>
                <h1>state 끌어올리기</h1>
                <TemperatureInput
                    scale="c"
                    temperature={cel}
                    onTemperatureChange={this.handleCelChange}
                />
                <TemperatureInput
                    scale="f"
                    temperature={fah}
                    onTemperatureChange={this.handleFahChange}
                />
                <BoilingVerdict
                        celsius={parseFloat(temperature)} />
            </div>
        )
    }
}
export default Calculator;