import { observable, computed, action } from "mobx";

export default class {
  @observable products = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @computed get productsMap() {
    if (this.products.length !== 0) {
      let map = {};
      this.products.forEach(pr => {
        map[pr.id.toString()] = pr.counter;
      });
      return map;
    }

    return null;
  }

  @computed get inCart() {
    return id => this.products.some(pr => pr.id == id);
  }

  @computed get poductsCount() {
    return this.products.length;
  }

  @computed get isEmpty() {
    return this.products.length === 0;
  }

  @computed get detailedProducts() {
    return this.products.map(pr => {
      const product = this.rootStore.productsStore.getProduct(pr.id);
      return { ...product, counter: pr.counter };
    });
  }

  @computed get totalPrice() {
    return this.detailedProducts.reduce((total, product) => {
      return total + product.price * product.counter;
    }, 0);
  }

  @action addProduct(id) {
    if (this.inCart(id)) {
      const neWcounter = this.productsMap[id] + 1;
      const rest = this.rootStore.productsStore.getProduct(id).rest;

      if (neWcounter <= rest) this.changeProductCounter(id, neWcounter);
    } else {
      this.products.push({ id, counter: 1 });
    }
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

  getIndexById = id => this.products.findIndex(pr => pr.id == id);
}
