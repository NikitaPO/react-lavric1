import React, { Component } from "react";

export default class ResultScreen extends Component {
  render() {
    let orderNumber = "#" + parseInt(Math.random() * 899999 + 100000);

    return (
      <h1 className="header-title">
        Your order {orderNumber} has been placed!
      </h1>
    );
  }
}
