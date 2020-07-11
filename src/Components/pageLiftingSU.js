import React,{Component} from 'react';
import logo from '../logo.svg';
import '../App.css';


// =========Nomor 1 Detik - Menit===========

const scaleNames = {
  s: 'Second',
  m: 'Minute'
};

function toSecond(minute) {
  return minute*60;
}

function toMinute(second) {
  return second/60;
}

function tryConvert(time, convert) {
  const input = parseFloat(time);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class TimeInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onTimeChange(event.target.value);
  }

  render() {
    const time = this.props.time;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter time in {scaleNames[scale]}:</legend>
        <input value={time}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class CalculatorTime extends Component {
  constructor(props) {
    super(props);
    this.handleSecondChange = this.handleSecondChange.bind(this);
    this.handleMinuteChange = this.handleMinuteChange.bind(this);
    this.state = {time: '', scale: 's'};
  }

  handleSecondChange(time) {
    this.setState({scale: 's', time});
  }

  handleMinuteChange(time) {
    this.setState({scale: 'm', time});
  }

  render() {
    const scale = this.state.scale;
    const time = this.state.time;
    const second = scale === 'm' ? tryConvert(time, toSecond) : time;
    const minute = scale === 's' ? tryConvert(time, toMinute) : time;

    return (
      <div>
        <fieldset>
          <legend>Second to Minute Converter</legend>
          <TimeInput
            scale="s"
            time={second}
            onTimeChange={this.handleSecondChange} />
          <TimeInput
            scale="m"
            time={minute}
            onTimeChange={this.handleMinuteChange} />
        </fieldset>
      </div>
    );
  }
}

// =========Nomor 2 Gram - Kilogram===========
const scaleName = {
  gr: 'Gram',
  kg: 'Kilogram'
};

function toGram(kilogram) {
  return kilogram*1000;
}

function toKilogram(gram) {
  return gram/1000;
}

function tryConverts(weight, convert) {
  const input = parseFloat(weight);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class WeightInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onWeightChange(event.target.value);
  }

  render() {
    const weight = this.props.weight;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter time in {scaleName[scale]}:</legend>
        <input value={weight}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}

export class CalculatorWeight extends Component {
  constructor(props) {
    super(props);
    this.handleGramChange = this.handleGramChange.bind(this);
    this.handleKilogramChange = this.handleKilogramChange.bind(this);
    this.state = {weight: '', scale: 'gr'};
  }

  handleGramChange(weight) {
    this.setState({scale: 'gr', weight});
  }

  handleKilogramChange(weight) {
    this.setState({scale: 'kg', weight});
  }

  render() {
    const scale = this.state.scale;
    const weight = this.state.weight;
    const gram = scale === 'kg' ? tryConverts(weight, toGram) : weight;
    const kilogram = scale === 'gr' ? tryConverts(weight, toKilogram) : weight;

    return (
      <div>
        <fieldset>
        <legend>Gram to Kilogram Converter</legend>
          <WeightInput
            scale="gr"
            weight={gram}
            onWeightChange={this.handleGramChange} />
          <WeightInput
            scale="kg"
            weight={kilogram}
            onWeightChange={this.handleKilogramChange} />
        </fieldset>
      </div>
    );
  }
}

export default function Konversi() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="display">
          <CalculatorTime/>
          <CalculatorWeight/>
        </div>
      </header>
    </div>
  );
}
