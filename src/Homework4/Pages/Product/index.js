import React from "react";
import { Row, Col, Image, ListGroup } from "react-bootstrap";
import productsStore from "~s/productsStore";
import Error404 from "~c/Errors/404";

export default function(props) {
  let productId = props.match.params.id;
  let product = productsStore.getProduct(productId);
  let productPage = product ? (
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
