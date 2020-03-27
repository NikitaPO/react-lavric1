import React, { Component } from "react";
import { Card, CardColumns, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { urlBuilder } from "~/Routes";
import AddButton from "~con/AddButton";
import styles from "./Products.module.css";
import withStore from "~/Hocs/withStore";

class Products extends Component {
  render() {
    const productsStore = this.props.stores.productsStore;
    const cartStore = this.props.stores.cartStore;

    const productsCards = productsStore.products.map(product => {
      return (
        <Card key={product.id} className={styles.productCard}>
          <Card.Body>
            <Card.Img variant="top" src={product.img} />
            <Link
              className={styles.productTitle}
              to={urlBuilder("product", { id: product.id })}
            >
              {product.title}
            </Link>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <AddButton productId={product.id}>Add to cart</AddButton>
          </Card.Body>
        </Card>
      );
    });

    return (
      <>
        <h1 className="header-title">Products</h1>
        <hr />
        <CardColumns>{productsCards}</CardColumns>
      </>
    );
  }
}

export default withStore(Products);
