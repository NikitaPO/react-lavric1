import cartStore from "./cartStore";
import productsStore from "./productsStore";
import orderStore from "./orderStore";

class RootStore {
  constructor() {
    this.cartStore = new cartStore(this);
    this.productsStore = new productsStore(this);
    this.orderStore = new orderStore(this);
  }
}

export default new RootStore();
