import { observable, computed, action } from "mobx";
import productsStore from "~s/productsStore";

class cartStore {
  @observable products = [];

  getIndexById = id => this.products.findIndex(pr => pr.id == id);

  @computed get productsMap() {
    if (this.products.length !== 0) {
      let map = {};
      this.products.map(pr => {
        map[pr.id.toString()] = pr.counter;
      });
      return map;
    }

    return null;
  }

  @computed get inCart() {
    return id => this.products.some(pr => pr.id == id);
  }

  @computed get detailedProducts() {
    return this.products.map(pr => {
      const product = productsStore.getProduct(pr.id);
      return { ...product, counter: pr.counter };
    });
  }

  @computed get totalPrice() {
    return this.detailedProducts.reduce((total, product) => {
      return total + product.price * product.counter;
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
