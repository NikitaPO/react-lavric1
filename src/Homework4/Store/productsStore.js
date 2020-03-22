import { observable, computed, action } from "mobx";

class productsStore {
  products = [
    {
      id: 100,
      title: "Ipnone 200",
      price: 12000,
      rest: 10,
      description:
        "The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface.",
      img:
        "https://avatars.mds.yandex.net/get-pdb/1025599/efb77f36-d993-4feb-a83a-c97a9f16056b/s1200",
      counter: 0
    },
    {
      id: 101,
      title: "Samsung AAZ8",
      price: 22000,
      rest: 5,
      description:
        "Samsung, South Korean company that is one of the world's largest producers of electronic devices. ",
      img: "https://www.netmarket.md/produse_img/03201826511344291157.jpg",
      counter: 0
    },
    {
      id: 103,
      title: "Nokia 3310",
      price: 5000,
      rest: 2,
      description:
        "Nokia Corporation is the world's largest manufacturer of mobile phones, serving customers in 130 countries",
      img:
        "https://media.collegetimes.com/uploads/2017/07/26165027/Nokia_3310_front_side.jpg",
      counter: 0
    },
    {
      id: 105,
      title: "Huawei ZZ",
      description:
        "Huawei is a Chinese information and communications technology (ICT) company that specializes in telecommunications equipment. The company also offers services and consumer electronics including wearables, mobile broadband modems, smartphones, tablets and PCs.",
      price: 15000,
      rest: 8,
      img: "https://active.shop.by/pics/items/64TcCEFda6.jpg",
      counter: 0
    },
    {
      id: 106,
      title: "Meizu ZZ",
      price: 13000,
      rest: 8,
      description:
        "Meizu phones are characterized by their light, comfortable design, premium sound quality, high-definition camera, and simple, elegant user interface, combining performance, ease of use and functionality with the durability needed to survive the human experience.",
      img:
        "https://avatars.mds.yandex.net/get-pdb/1645344/f1c90e7a-d261-4dca-9066-aa5f42980809/s1200?webp=false",
      counter: 0
    }
  ];

  @computed get getProducts() {
    return this.products;
  }

  @action getProduct(id) {
    let product = this.products.find(product => product.id == id);
    if (product) {
      return product;
    } else return null;
  }
}

export default new productsStore();
