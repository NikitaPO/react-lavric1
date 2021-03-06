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
import { Formik } from "formik";
import * as Yup from "yup";

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
            name: form.userInfo.name.value,
            email: form.userInfo.email.value,
            phone: form.userInfo.phone.value
          }}
          validationSchema={validationSchema}
          onSubmit={(values, props) => {
            setTimeout(() => {
              console.log(JSON.stringify(values, null, 2));
            });
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors
          }) => (
            <Form className="col-lg-10" onSubmit={handleSubmit}>
              <h1 className="header-title">Order form</h1>
              <Form.Row>
                <Col lg={6}>
                  <Form.Group>
                    <InputGroup className="p-2">
                      <InputGroup.Prepend>
                        <InputGroup.Text>
                          {form.userInfo.name.label}
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        value={values.name}
                        type={form.userInfo.name.type}
                        id="name"
                        name="name"
                        placeholder={form.userInfo.name.placeholder}
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
                          {form.userInfo.email.label}
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        value={values.email}
                        type={form.userInfo.email.type}
                        id="email"
                        name="email"
                        placeholder={form.userInfo.email.placeholder}
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
                          {form.userInfo.phone.label}
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        value={values.phone}
                        type={form.userInfo.phone.type}
                        id="phone"
                        name="phone"
                        placeholder={form.userInfo.phone.placeholder}
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
                        disabled={true}
                        disabled={!isValid || JSON.stringify(touched) === "{}"}
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
          )}
        </Formik>
      </>
    );
  }
}

export default OrderForm;
