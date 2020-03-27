import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { inject, observer } from "mobx-react";
import styles from "./BootstrapModal.module.css";

@inject("stores")
class BootstrapModal extends Component {
  render() {
    const orderStore = this.props.stores.orderStore;
    const cartStore = this.props.stores.cartStore;

    let formInfoList = [];
    for (let property in orderStore.formInfo) {
      formInfoList.push(
        <li key={property}>
          <b>{orderStore.formInfo[property].label}: </b>
          {orderStore.formInfo[property].value}
        </li>
      );
    }

    return (
      <Modal
        size="md"
        show={this.props.showModalWindow}
        onHide={this.props.hide}
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-md">
            Please, check all information:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className={styles.user_info}>{formInfoList}</ul>
          <h6>Order items:</h6>
          <ul>{this.props.purchasedProducts}</ul>
          <h6>
            <b>Total price: </b>
            {cartStore.totalPrice}
          </h6>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.hide}>
            Close
          </Button>
          <Button type="primary" onClick={this.props.confirm}>
            Confirm order
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default BootstrapModal;
