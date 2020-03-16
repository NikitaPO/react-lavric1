import React from "react";
import Cart from "~p/Cart";
import OrderForm from "~p/OrderForm";
import ResultScreen from "~p/ResultScreen";
import "./App.css";

export default class extends React.PureComponent {
  state = {
    products: getProducts(),
    userInfo: {
      name: {
        label: "Name",
        value: "",
        type: "text",
        placeholder: "Enter your name..."
      },
      email: {
        label: "E-mail",
        value: "",
        type: "text",
        placeholder: "mail@example.com"
      },
      phone: {
        label: "Phone",
        value: "",
        type: "text",
        placeholder: "Enter your phone..."
      }
    },
    activeRoute: "CART"
  };

  changeProductCounter = (i, counter) => {
    let products = [...this.state.products];
    products[i] = { ...products[i], counter };
    this.setState({ products });
  };

  moveToCart = () => {
    this.setState({ activeRoute: "CART" });
  };

  moveToOrder = () => {
    this.setState({ activeRoute: "ORDER" });
  };

  moveToResult = () => {
    this.setState({ activeRoute: "RESULT" });
  };

  deleteProductHandler = i => {
    let products = [...this.state.products].filter((product, j) => j !== i);
    this.setState({ products });
  };

  changeFormData = (property, value) => {
    let userInfo = { ...this.state.userInfo };
    userInfo[property] = { ...userInfo[property], value };
    this.setState({ userInfo });
  };

  render() {
    let totalPrice = this.state.products.reduce(
      (totalPrice, product) => totalPrice + product.price * product.counter,
      0
    );

    let page;
    switch (this.state.activeRoute) {
      case "CART":
        page = (
          <Cart
            products={this.state.products}
            changeProductCounter={this.changeProductCounter}
            deleteProductHandler={this.deleteProductHandler}
            moveToOrder={this.moveToOrder}
          />
        );
        break;
      case "ORDER":
        page = (
          <OrderForm
            products={this.state.products}
            totalPrice={totalPrice}
            userInfo={this.state.userInfo}
            onChange={this.changeFormData}
            onSend={this.moveToResult}
            moveToCart={this.moveToCart}
          />
        );
        break;
      case "RESULT":
        page = <ResultScreen />;
        break;
      default:
        <div>404</div>;
    }

    return <div className="container">{page}</div>;
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
