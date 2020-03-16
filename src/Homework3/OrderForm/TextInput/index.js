import React, { Component } from "react";
import { InputGroup, FormControl } from "react-bootstrap";

export default class TextInput extends Component {
  render() {
    return (
      <InputGroup className="p-2">
        <InputGroup.Prepend>
          <InputGroup.Text>{this.props.label}</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl {...this.props.nativeProps} />
      </InputGroup>
    );
  }
}
