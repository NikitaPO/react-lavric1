import React, { Component } from "react";
import { Form, Table, Button } from "react-bootstrap";
import Minmax from "./Minmax/Minmax";

export default class Cart extends Component {
  render() {
    let totalPrice = this.props.products.reduce(
      (totalPrice, product) => totalPrice + product.price * product.counter,
      0
    );

    let productList = this.props.products.map((product, index) => (
      <tr key={product.id}>
        <td>
          <Button
            block
            onClick={() => this.props.deleteProductHandler(index)}
            variant="danger"
          >
            Х
          </Button>
        </td>
        <td>{product.title}</td>
        <td>{product.price}</td>
        <td>
          <Minmax
            min={0}
            max={product.rest}
            counter={product.counter}
            onChange={counter =>
              this.props.changeProductCounter(index, counter)
            }
          />
        </td>
        <td>{product.counter * product.price}</td>
      </tr>
    ));

    return (
      <Form onSubmit={this.handleSubmit}>
        <Table striped bordered hover className="col-md-12 col-lg-8">
          <thead>
            <tr>
              <th>Delete</th>
              <th>Title</th>
              <th>Price</th>
              <th>Count</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {productList}
            <tr>
              <td colSpan="3"></td>
              <td>
                <Button
                  block
                  variant="success"
                  type="submit"
                  onClick={this.toggleModalWindow}
                >
                  Buy now
                </Button>
              </td>
              <td>{totalPrice}</td>
            </tr>
          </tbody>
        </Table>
      </Form>
    );
  }
}
