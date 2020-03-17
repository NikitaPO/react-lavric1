import React from "react";
import { observable, computed, action } from "mobx";
import Cart from "~p/Cart";
import OrderForm from "~p/OrderForm";
import ResultScreen from "~p/ResultScreen";

class router {
  routes = {
    cart: () => <Cart />,
    order: () => <OrderForm />,
    result: () => <ResultScreen />,
    error404: () => <div>404</div>
  };

  @observable activeRoute = "cart";

  @computed get component() {
    return this.routes[this.activeRoute]();
  }

  @action moveToPage(page) {
    if (typeof this.routes[page] == "undefined") {
      this.activeRoute = "error404";
    } else this.activeRoute = page;
  }
}

export default new router();
