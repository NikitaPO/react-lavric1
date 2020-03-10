import React from "react";
import Cart from "./Cart/Cart";
import OrderForm from "./OrderForm/OrderForm";
import ResultScreen from "./ResultScreen/ResultScreen";
import "./App.css";

export default class extends React.PureComponent {
  state = {
    products: getProducts(),
    userInfo: { name: null, email: null, phone: null },
    showOrderForm: false,
    showResultScreen: false,
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

  redirectToOrderForm = () => {
    this.setState({ showOrderForm: true });
  };

  redirectToResultScreen = () => {
    this.setState({ showOrderForm: false, showResultScreen: true });
  };

  toggleModalWindow = () => {
    this.setState({ showModalWindow: !this.state.showModalWindow });
  };

  setUserInfo = (name, email, phone) => {
    this.setState({ userInfo: { name, email, phone } });
  };

  render() {
    let totalPrice = this.state.products.reduce(
      (totalPrice, product) => totalPrice + product.price * product.counter,
      0
    );

    let currentComponent = (
      <Cart
        products={this.state.products}
        changeProductCounter={this.changeProductCounter}
        deleteProductHandler={this.deleteProductHandler}
        redirectToOrderForm={this.redirectToOrderForm}
      />
    );

    if (this.state.showOrderForm) {
      currentComponent = (
        <OrderForm
          products={this.state.products}
          totalPrice={totalPrice}
          showModalWindow={this.state.showModalWindow}
          toggleModalWindow={this.toggleModalWindow}
          setUserInfo={this.setUserInfo}
          userInfo={this.state.userInfo}
          redirectToResultScreen={this.redirectToResultScreen}
        />
      );
    } else if (this.state.showResultScreen) {
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
