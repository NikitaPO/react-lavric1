import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import MinmaxInput from "./Homework2/MinmaxInput/MinmaxInput";

export default class extends React.PureComponent {
  state = {
    products: getProducts(),
    showModalWindow: false
  };

  changeProductCounter = (i, counter) => {
    let products = [...this.state.products];
    products[i] = { ...products[i], counter };
    this.setState({ products });
  };

  deleteProductHandler = i => {
    let products = [...this.state.products].filter((product, j) => j !== i);
    this.setState({ products });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  toggleModalWindow = () => {
    this.setState({ showModalWindow: !this.state.showModalWindow });
  };

  render() {
    let purchasedProducts = this.state.products
      .filter(product => !!product.counter)
      .map(product => (
        <li key={product.id}>
          {product.title} - {product.counter}
        </li>
      ));

    let totalPrice = this.state.products.reduce(
      (totalPrice, product) => totalPrice + product.price * product.counter,
      0
    );

    let productList = this.state.products.map((product, index) => (
      <tr key={product.id}>
        <td>
          <Button
            block
            onClick={() => this.deleteProductHandler(index)}
            variant="danger"
          >
            Х
          </Button>
        </td>
        <td>{product.title}</td>
        <td>{product.price}</td>
        <td>
          <MinmaxInput
            min={0}
            max={product.rest}
            counter={product.counter}
            onChange={counter => this.changeProductCounter(index, counter)}
          />
        </td>
        <td>{product.counter * product.price}</td>
      </tr>
    ));

    return (
      <>
        <Modal
          size="sm"
          show={this.state.showModalWindow}
          onHide={this.toggleModalWindow}
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              You just bought:
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ul>{purchasedProducts}</ul>
          </Modal.Body>
        </Modal>

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
        <button onClick={() => this.changeProductCounter(0, 5)}>
          Change counter!
        </button>
      </>
    );
  }
}

function getProducts() {
  return [
    {
      id: 100,
      title: "Ipnone 200",
      price: 12000,
      rest: 10,
      counter: 0
    },
    {
      id: 101,
      title: "Samsung AAZ8",
      price: 22000,
      rest: 5,
      counter: 0
    },
    {
      id: 103,
      title: "Nokia 3310",
      price: 5000,
      rest: 2,
      counter: 0
    },
    {
      id: 105,
      title: "Huawei ZZ",
      price: 15000,
      rest: 8,
      counter: 0
    }
  ];
}
