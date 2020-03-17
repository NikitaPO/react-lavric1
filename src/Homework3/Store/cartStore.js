import { observable, computed, action } from "mobx";

class cartStore {
  @observable products = getProducts();

  @computed get totalPrice() {
    return this.products.reduce(
      (total, product) => total + product.price * product.counter,
      0
    );
  }

  @action changeProductCounter = (i, counter) => {
    this.products[i].counter = counter;
  };

  @action deleteProduct(i) {
    this.products.splice(i, 1);
  }
}

export default new cartStore();

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
