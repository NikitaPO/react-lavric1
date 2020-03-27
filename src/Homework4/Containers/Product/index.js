import React from "react";
import { Row, Col, Image, ListGroup } from "react-bootstrap";
import { inject, observer } from "mobx-react";
import Error404 from "~com/Errors/404";

// @inject('stores')

export default function(props) {
  // const productsStore = this.props.stores.productsStore;

  const productId = props.match.params.id;
  const product = productsStore.getProduct(productId);
  const productPage = product ? (
    <div>
      <h1 className="header-title">{product.title}</h1>{" "}
      <Row>
        <Col>
          <Image src={product.img} thumbnail />
        </Col>
        <Col>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <b>Price:</b> {product.price}
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Rest:</b> {product.rest}
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Description:</b>
              <p>{product.description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  ) : (
    <Error404 />
  );

  return productPage;
}
