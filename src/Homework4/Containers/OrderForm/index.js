import React, { Component } from "react";
import { Form, Button, Table, Col, InputGroup, Row } from "react-bootstrap";
import BootstrapModal from "./BootstrapModal";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { routesMap } from "~/Routes";
import withStore from "~/Hocs/withStore";

class OrderForm extends Component {
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
    setTimeout(() => {
      console.log(
        JSON.stringify(this.props.stores.orderStore.userInfo, null, 2)
      );
    });
    this.hide();
    this.props.history.push(routesMap.result);
  };

  render() {
    const cartStore = this.props.stores.cartStore;
    const orderStore = this.props.stores.orderStore;

    const productList = cartStore.detailedProducts.map(product => (
      <tr key={product.id}>
        <td>{product.title}</td>
        <td>{product.price}</td>
        <td>{product.counter}</td>
        <td>{product.counter * product.price}</td>
      </tr>
    ));

    const purchasedProducts = cartStore.detailedProducts
      .filter(product => !!product.counter)
      .map(product => (
        <li key={product.id}>
          {product.title} - {product.counter}
        </li>
      ));

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const validationSchema = Yup.object().shape({
      name: Yup.string()
        .min(1, "Must have a character")
        .max(255, "Must be shorter than 255")
        .required("Must enter a name"),
      email: Yup.string()
        .email("Must be a valid email adress")
        .max(255, "Must be shorter than 255")
        .required("Must enter a email"),
      phone: Yup.string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("Must enter a phone")
    });

    return (
      <>
        <BootstrapModal
          showModalWindow={this.state.showModalWindow}
          hide={this.hide}
          confirm={this.confirm}
          purchasedProducts={purchasedProducts}
        />
        <Formik
          initialValues={{
            name: orderStore.formInfo.name.value,
            email: orderStore.formInfo.email.value,
            phone: orderStore.formInfo.phone.value
          }}
          validationSchema={validationSchema}
          onSubmit={(values, props) => {
            props.validateForm().then(this.show());
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            isValid,
            errors
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <h1 className="header-title">Order form</h1>
              <hr />
              <Form.Row>
                <Col lg={6}>
                  <Form.Group>
                    <InputGroup className="p-2">
                      <InputGroup.Prepend>
                        <InputGroup.Text>
                          {orderStore.formInfo.name.label}
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        value={values.name}
                        type={orderStore.formInfo.name.type}
                        id="name"
                        name="name"
                        placeholder={orderStore.formInfo.name.placeholder}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isValid={touched.name && !errors.name}
                        isInvalid={!!errors.name}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group>
                    <InputGroup className="p-2">
                      <InputGroup.Prepend>
                        <InputGroup.Text>
                          {orderStore.formInfo.email.label}
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        value={values.email}
                        type={orderStore.formInfo.email.type}
                        id="email"
                        name="email"
                        placeholder={orderStore.formInfo.email.placeholder}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isValid={touched.email && !errors.email}
                        isInvalid={!!errors.email}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group>
                    <InputGroup className="p-2">
                      <InputGroup.Prepend>
                        <InputGroup.Text>
                          {orderStore.formInfo.phone.label}
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        value={values.phone}
                        type={orderStore.formInfo.phone.type}
                        id="phone"
                        name="phone"
                        placeholder={orderStore.formInfo.phone.placeholder}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isValid={touched.phone && !errors.phone}
                        isInvalid={!!errors.phone}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.phone}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                  <Form.Row>
                    <h5 className="m-2">Total: {cartStore.totalPrice}</h5>
                  </Form.Row>
                  <Form.Row>
                    <Link to={routesMap.cart} className="btn btn-secondary m-2">
                      Back
                    </Link>
                    <Button
                      variant="success"
                      type="submit"
                      disabled={!isValid || JSON.stringify(touched) === "{}"}
                      className="m-2"
                    >
                      Confirm the order
                    </Button>
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
          )}
        </Formik>
      </>
    );
  }
}

export default withStore(OrderForm);
