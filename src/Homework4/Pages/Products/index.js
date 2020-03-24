import React, { Component } from "react";
import { observer } from "mobx-react";
import productsStore from "~s/productsStore";
import { Card, CardColumns } from "react-bootstrap";
import { Link } from "react-router-dom";
import { urlBuilder } from "~/Routes";
import styles from "./Products.module.css";

@observer
class Products extends Component {
  cardClickHandler = product => {
    this.props.history.push(urlBuilder("product", { id: product.id }));
  };

  render() {
    let productsCards = productsStore.products.map(product => (
      <Card
        key={product.id}
        className={styles.productCard}
        onClick={() => this.cardClickHandler(product)}
      >
        <Card.Body>
          <Card.Img variant="top" src={product.img} />
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    ));
    return (
      <>
        <h1 className="header-title">Products</h1>
        <hr />
        <CardColumns>{productsCards}</CardColumns>
      </>
    );
  }
}

export default Products;
