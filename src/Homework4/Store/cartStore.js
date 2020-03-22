import { observable, computed, action } from "mobx";
import productsStore from "~s/productsStore";

class cartStore {
  @observable products = productsStore.getProducts;

  @computed get totalPrice() {
    return this.products.reduce(
      (total, product) => total + product.price * product.counter,
      0
    );
  }

  @computed get changeOn() {
    return this.products.map((product, i) => {
      return counter => this.changeProductCounter(counter, i);
    });
  }

  @action changeProductCounter = (counter, i) => {
    this.products[i].counter = counter;
  };

  @action deleteProduct(i) {
    this.products.splice(i, 1);
  }
}

export default new cartStore();
