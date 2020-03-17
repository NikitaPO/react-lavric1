import React, { Component } from "react";
import {
  Form,
  Button,
  Table,
  Col,
  InputGroup,
  FormControl
} from "react-bootstrap";
import { observer } from "mobx-react";
import BootstrapModal from "./BootstrapModal";
import cartStore from "~s/cartStore";
import form from "~s/form";
import router from "~s/router";

@observer
class OrderForm extends Component {
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
    router.moveToPage("result");
  };

  render() {
    const productList = cartStore.products.map((product, index) => (
      <tr key={product.id}>
        <td>{product.title}</td>
        <td>{product.price}</td>
        <td>{product.counter}</td>
        <td>{product.counter * product.price}</td>
      </tr>
    ));

    const purchasedProducts = cartStore.products
      .filter(product => !!product.counter)
      .map(product => (
        <li key={product.id}>
          {product.title} - {product.counter}
        </li>
      ));

    let formFields = [];
    for (let property in form.userInfo) {
      let field = form.userInfo[property];

      formFields.push(
        <InputGroup key={property} className="p-2">
          <InputGroup.Prepend>
            <InputGroup.Text>{field.label}</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            value={field.value}
            type={field.type}
            placeholder={field.placeholder}
            onChange={e => form.changeFormData(property, e.target.value)}
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
        />

        <Form onSubmit={this.handleSubmit} className="col-lg-10">
          <h1 className="header-title">Order form</h1>
          <Form.Row>
            <Col lg={6}>
              {formFields}
              <Form.Row>
                <Col>
                  <Button
                    variant="secondary"
                    type="submit"
                    className="m-2"
                    onClick={() => router.moveToPage("cart")}
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
                  <h5 className="p-3">Total: {cartStore.totalPrice}</h5>
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

export default OrderForm;
