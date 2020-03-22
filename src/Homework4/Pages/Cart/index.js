import React, { Component } from "react";
import { observer } from "mobx-react";
import { Form, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Minmax from "~c/Minmax";
import cartStore from "~s/cartStore";
import { routesMap } from "~/Routes";

@observer
class Cart extends Component {
  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    let productList = cartStore.products.map((product, i) => (
      <tr key={product.id}>
        <td>
          <Button
            block
            onClick={() => cartStore.deleteProduct(i)}
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
            onChange={cartStore.changeOn[i]}
          />
        </td>
        <td>{product.counter * product.price}</td>
      </tr>
    ));

    return (
      <Form onSubmit={this.handleSubmit}>
        <h1 className="header-title">Cart</h1>
        <hr />
        <Table striped bordered hover>
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
                <Link to={routesMap.order} className="btn btn-success">
                  Buy now
                </Link>
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
