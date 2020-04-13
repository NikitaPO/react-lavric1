import React, { Component } from "react";
import { Navbar, Badge } from "react-bootstrap";
import LinkButton from "~com/LinkButton";
import { routesMap } from "~/Routes";
import withStore from "~/Hocs/withStore";

class Navigation extends Component {
  render() {
    const cartStore = this.props.stores.cartStore;

    return (
      <Navbar
        bg="light"
        variant="light"
        className="d-flex justify-content-between"
      >
        <Navbar.Brand>MegaShop</Navbar.Brand>
        <LinkButton to={routesMap.cart} variant="outline-dark">
          To cart
          {cartStore.isEmpty ? null : (
            <>
              &nbsp;&nbsp;<Badge variant="dark">{cartStore.poductsCount}</Badge>
            </>
          )}
        </LinkButton>
      </Navbar>
    );
  }
}

export default withStore(Navigation);
