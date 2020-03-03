import React, { setState } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

export default class extends React.PureComponent {
  constructor(props) {
    super(props);
    this.dec = React.createRef();
    this.inc = React.createRef();
    this.state = {
      counter: this.props.min,
      inputValue: this.props.min.toString()
    };
  }

  static propTypes = {
    max: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired
  };

  buttonsDisableHandler() {
    let dec = this.dec.current;
    let inc = this.inc.current;
    this.state.counter === this.props.min
      ? (dec.disabled = true)
      : (dec.disabled = false);
    this.state.counter === this.props.max
      ? (inc.disabled = true)
      : (inc.disabled = false);
  }

  componentDidMount() {
    this.buttonsDisableHandler();
  }

  setCounter = newCounter => {
    let { max, min } = this.props;
    let counter = Math.max(Math.min(newCounter, max), min);
    this.setState({ counter, inputValue: counter });
  };

  increase = () => {
    this.setCounter(this.state.counter + 1);
  };

  decrease = () => {
    this.setCounter(this.state.counter - 1);
  };

  inputChangeHandler = newStr => {
    this.setState({ inputValue: newStr });
  };

  applyValue = () => {
    let counter = parseInt(this.state.inputValue);
    this.setCounter(isNaN(counter) ? this.props.min : counter);
  };

  checkEnterKey = e => {
    if (e.key === "Enter" || e.keyCode === 13) this.applyValue();
  };

  render() {
    let dec = this.dec.current;
    let inc = this.inc.current;
    if (dec && inc) {
      this.buttonsDisableHandler();
    }

    return (
      <div>
        <p>{this.props.min}</p>
        <Button ref={this.dec} variant="dark" onClick={this.decrease}>
          -
        </Button>
        <input
          value={this.state.inputValue}
          onChange={e => this.inputChangeHandler(e.target.value)}
          onBlur={this.applyValue}
          onKeyUp={this.checkEnterKey}
        />
        <Button ref={this.inc} variant="dark" onClick={this.increase}>
          +
        </Button>
      </div>
    );
  }
}
