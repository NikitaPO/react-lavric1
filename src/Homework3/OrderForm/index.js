import React, { Component } from "react";
import {
  Form,
  Button,
  Table,
  Col,
  InputGroup,
  FormControl
} from "react-bootstrap";
import BootstrapModal from "./BootstrapModal";

export default class OrderForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
  };

  state = {
    showModalWindow: false
  };

  hide = () => {
    this.setState({ showModalWindow: false });
  };

  show = () => {
    this.setState({ showModalWindow: true });
  };

  confirm = () => {
    this.hide();
    this.props.onSend();
  };

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

    let formFields = [];

    for (let property in this.props.userInfo) {
      let field = this.props.userInfo[property];

      formFields.push(
        <InputGroup key={property} className="p-2">
          <InputGroup.Prepend>
            <InputGroup.Text>{field.label}</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            value={field.value}
            type={field.type}
            placeholder={field.placeholder}
            onChange={e => this.props.onChange(property, e.target.value)}
          />
        </InputGroup>
      );
    }

    return (
      <>
        <BootstrapModal
          showModalWindow={this.state.showModalWindow}
          hide={this.hide}
          confirm={this.confirm}
          purchasedProducts={purchasedProducts}
          userInfo={this.props.userInfo}
          totalPrice={this.props.totalPrice}
          moveToResult={this.props.moveToResult}
        />

        <Form onSubmit={this.handleSubmit} className="col-lg-10">
          <h1 className="header-title">Order form</h1>
          <Form.Row>
            <Col lg={6}>
              {formFields}
              <Form.Row>
                <Col>
                  <Button
                    variant="secondary  "
                    type="submit"
                    className="m-2"
                    onClick={this.props.moveToCart}
                  >
                    Back
                  </Button>
                  <Button
                    variant="success"
                    type="submit"
                    className="m-2"
                    onClick={this.show}
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
