import React from "react";
import PropTypes from "prop-types";

export default class extends React.PureComponent {
  static defaultProps = {
    onChange: function(e) {},
    nativeProps: {}
  };

  static propTypes = {
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func,
    nativeProps: PropTypes.object
  };

  nativeInput = React.createRef();

  componentDidUpdate(prevProps, prevState) {
    let input = this.nativeInput.current;
    if (
      prevProps.value !== this.props.value ||
      this.props.value != input.value
    ) {
      input.value = this.props.value;
    }
  }

  checkChange = e => {
    if (this.props.value.toString() !== e.target.value) {
      this.props.onChange(e);
    }
  };

  checkEnterKey = e => {
    if (e.key === "Enter" || e.keyCode === 13) this.checkChange(e);
  };

  render() {
    return (
      <input
        {...this.props.nativeProps}
        ref={this.nativeInput}
        defaultValue={this.props.value}
        onBlur={this.checkChange}
        onKeyUp={this.checkEnterKey}
      />
    );
  }
}
