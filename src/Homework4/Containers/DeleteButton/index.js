import React from "react";
import withStore from "~/Hocs/withStore";
import { Button } from "react-bootstrap";

function AddButton(props) {
  const cartStore = props.stores.cartStore;

  return (
    <Button
      {...props.other}
      variant="danger"
      onClick={() => cartStore.deleteProduct(props.productId)}
    >
      {props.children}
    </Button>
  );
}

export default withStore(AddButton);
