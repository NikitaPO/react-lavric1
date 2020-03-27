import React, { Component } from "react";
import { Form, Table, Button } from "react-bootstrap";
import Minmax from "~com/Minmax";
import { Link } from "react-router-dom";
import { routesMap } from "~/Routes";
import withStore from "~/Hocs/withStore";

class Cart extends Component {
  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const cartStore = this.props.stores.cartStore;

    const productList = cartStore.detailedProducts.map((product, i) => (
      <tr key={product.id}>
        <td>
          <Button
            block
            onClick={() => cartStore.deleteProduct(product.id)}
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
              cartStore.changeProductCounter(product.id, counter)
            }
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

export default withStore(Cart);
