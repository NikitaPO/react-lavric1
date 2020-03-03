import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import NormInputClass from "./Homework2/NormInputClass";

export default class extends React.PureComponent {
  state = {
    products: [
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
    ],
    purchasedProducts: [],
    totalPrice: 0,
    showModalWindow: false
  };

  changeTotalPrice = () => {
    const newTotalPrice = this.state.products.reduce(
      (totalPrice, product) => (totalPrice += product.price * product.counter),
      0
    );
    this.setState({ totalPrice: newTotalPrice });
  };

  changeProductCounter = (index, counter) => {
    let newProducts = [...this.state.products];
    let newProduct = { ...newProducts[index] };
    newProduct.counter = counter;
    newProducts[index] = newProduct;
    this.setState({ products: newProducts }, () => {
      this.calculatePurchasedProducts();
      this.changeTotalPrice();
    });
  };

  deleteProductHandler = index => {
    let newProducts = [...this.state.products];
    newProducts.splice(index, 1);
    this.setState({ products: newProducts }, () => {
      this.calculatePurchasedProducts();
      this.changeTotalPrice();
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  calculatePurchasedProducts = () => {
    let purchasedProducts = this.state.products.filter(product =>
      product.counter ? true : false
    );
    this.setState({ purchasedProducts });
  };

  toggleModalWindow = () => {
    this.setState({ showModalWindow: !this.state.showModalWindow });
  };

  render() {
    let purchasedProducts = this.state.purchasedProducts.map(product => (
      <li key={product.id}>
        {product.title} - {product.counter}
      </li>
    ));

    let productList = this.state.products.map((product, index) => (
      <tr key={product.id}>
        <td>
          <Button
            block
            onClick={() => this.deleteProductHandler(index)}
            variant="danger"
          >
            Delete
          </Button>
        </td>
        <td>{product.title}</td>
        <td>{product.price}</td>
        <td>
          <NormInputClass
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
                <th>Remove product</th>
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
                <td>{this.state.totalPrice}</td>
              </tr>
            </tbody>
          </Table>
        </Form>
      </>
    );
  }
}
