import React, { setState } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

export default class extends React.PureComponent {
  constructor(props) {
    super(props);
    this.dec = React.createRef();
    this.inc = React.createRef();
    this.state = {
      counter: this.props.min
    };
  }

  static propTypes = {
    max: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired
  };

  componentDidMount() {
    this.buttonsDisableHandler();
  }

  setCounter = newCounter => {
    let { max, min } = this.props;
    let counter = Math.max(Math.min(newCounter, max), min);
    this.setState({ counter });
  };

  increase = () => {
    this.setCounter(this.state.counter + 1);
  };

  decrease = () => {
    this.setCounter(this.state.counter - 1);
  };

  inputChangeHandler = e => {
    let value = +e.target.value;
    if (isNaN(value)) value = this.props.min;
    this.setCounter(value);
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

  render() {
    let dec = this.dec.current;
    let inc = this.inc.current;
    if (dec && inc) {
      this.buttonsDisableHandler();
    }

    return (
      <div>
        <Button ref={this.dec} variant="dark" onClick={this.decrease}>
          -
        </Button>
        <input value={this.state.counter} onChange={this.inputChangeHandler} />
        <Button ref={this.inc} variant="dark" onClick={this.increase}>
          +
        </Button>
      </div>
    );
  }
}
