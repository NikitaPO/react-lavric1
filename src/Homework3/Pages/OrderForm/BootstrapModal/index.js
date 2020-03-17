import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import styles from "./BootstrapModal.module.css";
import cartStore from "~s/cartStore";
import form from "~s/form";
import router from "~s/router";

export default class BootstrapModal extends Component {
  render() {
    let userInfoList = [];
    for (let property in form.userInfo) {
      userInfoList.push(
        <li key={property}>
          <b>{form.userInfo[property].label}: </b>
          {form.userInfo[property].value}
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
          <ul className={styles.user_info}>{userInfoList}</ul>
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
          <Button variant="primary" onClick={this.props.confirm}>
            Confirm order
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
