import React from "react";
import { inject, observer } from "mobx-react";
import Error404 from "~com/Errors/404";
import ProductItem from "~com/Products/ProductItem";

@inject("stores")
@observer
class Product extends React.Component {
  render() {
    const productsStore = this.props.stores.productsStore;
    const productId = this.props.match.params.id;
    const product = productsStore.getProduct(productId);

    if (product === null) {
      return <Error404 />;
    } else {
      return (
        <ProductItem
          title={product.title}
          img={product.img}
          title={product.title}
          rest={product.rest}
          description={product.description}
        />
      );
    }
  }
}

export default Product;
