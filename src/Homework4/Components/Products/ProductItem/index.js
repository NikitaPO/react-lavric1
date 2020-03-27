import React from "react";
import { Row, Col, Image, ListGroup } from "react-bootstrap";

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
    </div>
  );
}
