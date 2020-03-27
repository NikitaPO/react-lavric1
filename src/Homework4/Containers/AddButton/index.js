import React from "react";
import withStore from "~/Hocs/withStore";
import { Button, Badge } from "react-bootstrap";

function AddButton(props) {
  const cartStore = props.stores.cartStore;

  return (
    <Button
      {...props.other}
      variant="success"
      onClick={() => cartStore.addProduct(props.productId)}
    >
      {props.children}
      {cartStore.inCart(props.productId) ? (
        <>
          &nbsp;&nbsp;
          <Badge variant="light">
            {cartStore.productsMap[props.productId]}
          </Badge>
        </>
      ) : null}
    </Button>
  );
}

export default withStore(AddButton);
