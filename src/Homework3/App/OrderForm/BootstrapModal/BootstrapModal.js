import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import styles from "./BootstrapModal.module.css";

export default class BootstrapModal extends Component {
  render() {
    return (
      <Modal
        size="md"
        show={this.props.showModalWindow}
        onHide={this.props.toggleModalWindow}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-md">
            Please, check all information:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className={styles.user_info}>
            <li>
              <b>Name: </b>
              {this.props.userInfo.name}
            </li>
            <li>
              <b>Email: </b>
              {this.props.userInfo.email}
            </li>
            <li>
              <b>Phone: </b>
              {this.props.userInfo.phone}
            </li>
          </ul>
          <h6>Order items:</h6>
          <ul>{this.props.purchasedProducts}</ul>
          <h6>
            <b>Total price: </b>
            {this.props.totalPrice}
          </h6>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.toggleModalWindow}>
            Close
          </Button>
          <Button variant="primary" onClick={this.props.redirectToResultScreen}>
            Confirm order
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
