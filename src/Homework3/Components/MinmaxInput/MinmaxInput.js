import React from "react";
import PropTypes from "prop-types";
import { Button, InputGroup } from "react-bootstrap";
import LazyInput from "~c/LazyInput";
import styles from "./MinmaxInput.module.css";

export default class extends React.PureComponent {
  constructor(props) {
    super(props);
    this.dec = React.createRef();
    this.inc = React.createRef();
  }

  static propTypes = {
    max: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    counter: PropTypes.number.isRequired,
    onChange: PropTypes.func
  };

  buttonsDisableHandler() {
    let dec = this.dec.current;
    let inc = this.inc.current;
    this.props.counter === this.props.minA
      ? (dec.disabled = true)
      : (dec.disabled = false);
    this.props.counter === this.props.max
      ? (inc.disabled = true)
      : (inc.disabled = false);
  }

  componentDidMount() {
    this.buttonsDisableHandler();
  }

  setCounter = newCounter => {
    let { max, min } = this.props;
    let counter = Math.max(Math.min(newCounter, max), min);
    this.props.onChange(counter);
  };

  increase = () => {
    this.setCounter(this.props.counter + 1);
  };

  decrease = () => {
    this.setCounter(this.props.counter - 1);
  };

  onChange = e => {
    let counter = parseInt(e.target.value);
    this.setCounter(isNaN(counter) ? this.props.min : counter);
  };

  render() {
    let dec = this.dec.current;
    let inc = this.inc.current;
    if (dec && inc) {
      this.buttonsDisableHandler();
    }

    return (
      <InputGroup>
        <InputGroup.Prepend>
          <Button
            ref={this.dec}
            variant="outline-secondary"
            onClick={this.decrease}
          >
            -
          </Button>
        </InputGroup.Prepend>
        <LazyInput
          nativeProps={{ type: "text", className: styles.input }}
          value={this.props.counter}
          onChange={e => this.onChange(e)}
        />
        <InputGroup.Append>
          <Button
            ref={this.inc}
            variant="outline-secondary"
            onClick={this.increase}
          >
            +
          </Button>
        </InputGroup.Append>
      </InputGroup>
    );
  }
}
