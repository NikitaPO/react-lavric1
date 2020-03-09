import React from "react";
import Cart from "./Cart/Cart";
import OrderForm from "./OrderForm/OrderForm";
import ResultScreen from "./ResultScreen/ResultScreen";

export default class extends React.PureComponent {
  state = {
    products: getProducts(),
    route: {
      showOrderForm: false,
      showResultScreen: false
    },
    showModalWindow: false
  };

  changeProductCounter = (i, counter) => {
    let products = [...this.state.products];
    products[i] = { ...products[i], counter };
    this.setState({ products });
  };

  deleteProductHandler = i => {
    let products = [...this.state.products].filter((product, j) => j !== i);
    this.setState({ products });
  };

  render() {
    let route = this.state.route;
    let currentComponent = (
      <Cart
        products={this.state.products}
        changeProductCounter={this.changeProductCounter}
        deleteProductHandler={this.deleteProductHandler}
      />
    );

    if (route.showOrderForm) {
      currentComponent = <OrderForm />;
    } else if (route.showResultScreen) {
      currentComponent = <ResultScreen />;
    }

    return currentComponent;
  }
}

function getProducts() {
  return [
    {
      id: 100,
      title: "Ipnone 200",
      price: 12000,
      rest: 10,
      counter: 0
    },
    {
      id: 101,
      title: "Samsung AAZ8",
      price: 22000,
      rest: 5,
      counter: 0
    },
    {
      id: 103,
      title: "Nokia 3310",
      price: 5000,
      rest: 2,
      counter: 0
    },
    {
      id: 105,
      title: "Huawei ZZ",
      price: 15000,
      rest: 8,
      counter: 0
    }
  ];
}
