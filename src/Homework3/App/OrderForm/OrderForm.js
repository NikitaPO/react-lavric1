import React, { Component } from "react";
import { Form, Button, Table, Col } from "react-bootstrap";
import TextInput from "./TextInput/TextInput";
import BootstrapModal from "./BootstrapModal/BootstrapModal";

export default class OrderForm extends Component {
  handleSubmit = e => {
    const name = this.userNameInput.current.value;
    const email = this.userEmailInput.current.value;
    const phone = this.userPhoneInput.current.value;
    this.props.setUserInfo(name, email, phone);
    e.preventDefault();
  };

  userNameInput = React.createRef();
  userEmailInput = React.createRef();
  userPhoneInput = React.createRef();

  render() {
    const productList = this.props.products.map((product, index) => (
      <tr key={product.id}>
        <td>{product.title}</td>
        <td>{product.price}</td>
        <td>{product.counter}</td>
        <td>{product.counter * product.price}</td>
      </tr>
    ));

    const purchasedProducts = this.props.products
      .filter(product => !!product.counter)
      .map(product => (
        <li key={product.id}>
          {product.title} - {product.counter}
        </li>
      ));

    return (
      <>
        <BootstrapModal
          showModalWindow={this.props.showModalWindow}
          toggleModalWindow={this.props.toggleModalWindow}
          purchasedProducts={purchasedProducts}
          userInfo={this.props.userInfo}
          totalPrice={this.props.totalPrice}
          redirectToResultScreen={this.props.redirectToResultScreen}
        />

        <Form onSubmit={this.handleSubmit} className="col-lg-8">
          <h1 className="header-title">Order form</h1>
          <Form.Row>
            <Col lg={6}>
              <TextInput
                label={"Name"}
                nativeProps={{
                  placeholder: "Enter your name...",
                  ref: this.userNameInput
                }}
              />
              <TextInput
                label={"E-mail"}
                nativeProps={{
                  placeholder: "mail@example.com",
                  ref: this.userEmailInput
                }}
              />
              <TextInput
                label={"Phone"}
                nativeProps={{
                  placeholder: "Enter your phone...",
                  ref: this.userPhoneInput
                }}
              />
              <Form.Row>
                <Col>
                  <Button
                    variant="success"
                    type="submit"
                    className="m-2"
                    onClick={this.props.toggleModalWindow}
                  >
                    Confirm the order
                  </Button>
                </Col>
                <Col>
                  <h5 className="p-3">Total: {this.props.totalPrice}</h5>
                </Col>
              </Form.Row>
            </Col>
            <Col>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Count</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>{productList}</tbody>
              </Table>
            </Col>
          </Form.Row>
        </Form>
      </>
    );
  }
}
