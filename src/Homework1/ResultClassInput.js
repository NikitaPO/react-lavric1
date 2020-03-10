import React, { setState } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

export default class extends React.PureComponent {
  constructor(props) {
    super(props);
    this.dec = React.createRef();
    this.inc = React.createRef();
    this.state = {
      inputValue: this.props.counter.toString()
    };
  }

  static propTypes = {
    max: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    counter: PropTypes.number.isRequired,
    onChange: PropTypes.func
  };

  componentDidUpdate(prevProps) {
    if (
      prevProps.counter !== this.props.counter &&
      this.props.counter != this.state.inputValue
    ) {
      this.setState({ inputValue: this.props.counter });
    }
  }

  buttonsDisableHandler() {
    let dec = this.dec.current;
    let inc = this.inc.current;
    this.props.counter === this.props.min
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
    this.setState({ inputValue: counter });
  };

  increase = () => {
    this.setCounter(this.props.counter + 1);
  };

  decrease = () => {
    this.setCounter(this.props.counter - 1);
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
        <FormControl
          value={this.state.inputValue}
          onChange={e => this.inputChangeHandler(e.target.value)}
          onBlur={this.applyValue}
          onKeyUp={this.checkEnterKey}
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
