import { observable, computed, action } from "mobx";
import productsStore from "~s/productsStore";

class cartStore {
  @observable products = [
    { id: 100, counter: 1 },
    { id: 101, counter: 2 },
    { id: 102, counter: 2 },
    { id: 103, counter: 1 },
    { id: 104, counter: 1 }
  ];

  getIndexById = id => this.products.findIndex(pr => pr.id == id);

  @computed get detailedProducts() {
    return this.products.map(pr => {
      const product = productsStore.getProduct(pr.id);
      return { ...product, counter: pr.counter };
    });
  }

  @computed get totalPrice() {
    return this.products.reduce((total, pr) => {
      let product = productsStore.getProduct(pr.id);
      return total + product.price * pr.counter;
    }, 0);
  }

  @action add(id) {
    this.products.push({ id, counter: 1 });
  }

  @action changeProductCounter = (id, counter) => {
    let index = this.getIndexById(id);

    if (index !== -1) {
      this.products[index].counter = counter;
    }
  };

  @action deleteProduct(id) {
    let index = this.getIndexById(id);

    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }
}

export default new cartStore();
