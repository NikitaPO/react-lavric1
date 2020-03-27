import React from "react";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";
import AddButton from "~con/AddButton";
import DeleteButton from "~con/DeleteButton";

export default function(props) {
  return (
    <div>
      <h1 className="header-title">{props.title}</h1>
      <hr />
      <Row>
        <Col>
          <Image src={props.img} thumbnail />
        </Col>
        <Col>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <b>Price:</b> {props.price}
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Rest:</b> {props.rest}
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Description:</b>
              <p>{props.description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <DeleteButton
          productId={props.productId}
          other={{ className: "mt-3 ml-3 mb-3" }}
        >
          Remove
        </DeleteButton>
        <AddButton productId={props.productId} other={{ className: "m-3" }}>
          Add
        </AddButton>
      </Row>
    </div>
  );
}
