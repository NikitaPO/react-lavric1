import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import LazyInput from "./Homework2/LazyInput/LazyInput";

export default class extends React.Component {
  state = {
    inp1: "start",
    inp2: "start 2  "
  };

  render() {
    return (
      <>
        <h3>Lazy input:</h3>
        <p>{this.state.inp1}</p>
        <LazyInput
          nativeProps={{ type: "text", className: "lazy-input" }}
          value={this.state.inp1}
          onChange={e => {
            this.setState({ inp1: e.target.value });
          }}
        />
        <h3>Lazy input not lazy:</h3>
        <p>{this.state.inp2}</p>
        <LazyInput
          nativeProps={{
            type: "text",
            className: "lazy-input",
            onChange: e => {
              this.setState({ inp2: e.target.value });
            }
          }}
          value={this.state.inp2}
        />
        <hr />
        <button onClick={() => this.setState({ inp1: "test" })}>
          Unreal change
        </button>
      </>
    );
  }
}
