import React, { Component } from "react";
import { observer } from "mobx-react";
import { Form, Table, Button } from "react-bootstrap";
import Minmax from "./Minmax";
import cartStore from "~s/cartStore";
import router from "~s/router";


@observer
class Cart extends Component {
  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    let productList = cartStore.products.map((product, index) => (
      <tr key={product.id}>
        <td>
          <Button
            block
            onClick={() => cartStore.deleteProduct(index)}
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
            onChange={counter => cartStore.changeProductCounter(index, counter)}
          />
        </td>
        <td>{product.counter * product.price}</td>
      </tr>
    ));

    return (
      <Form onSubmit={this.handleSubmit}>
        <h1 className="header-title">Cart</h1>
        <hr />
        <Table striped bordered hover className="col-md-12 col-lg-10">
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
                  onClick={() => router.moveToPage("order")}
                >
                  Buy now
                </Button>
              </td>
              <td>{cartStore.totalPrice}</td>
            </tr>
          </tbody>
        </Table>
      </Form>
    );
  }
}

export default Cart;
